import { describe, expect, it } from 'vitest';
import type { CalibrationPoint, Room } from '@/types/homeassistant';
import { fitAffine, resolveMapTransform, type MapDimensions, type MapRotation } from '../mapTransform';
import { buildCleanSpotPayload, buildCleanZonePayload, convertUIZoneToVacuumZone } from '../zoneConverter';

function calibrationForRotation(rotation: MapRotation): CalibrationPoint[] {
  const mapPoints: Record<MapRotation, Array<{ x: number; y: number }>> = {
    0: [
      { x: 10, y: 90 },
      { x: 90, y: 90 },
      { x: 10, y: 10 },
    ],
    90: [
      { x: 10, y: 10 },
      { x: 10, y: 90 },
      { x: 90, y: 10 },
    ],
    180: [
      { x: 90, y: 10 },
      { x: 10, y: 10 },
      { x: 90, y: 90 },
    ],
    270: [
      { x: 90, y: 90 },
      { x: 90, y: 10 },
      { x: 10, y: 90 },
    ],
  };
  const vacuumPoints = [
    { x: 0, y: 0 },
    { x: 1000, y: 0 },
    { x: 0, y: 1000 },
  ];
  return vacuumPoints.map((vacuum, index) => ({ vacuum, map: mapPoints[rotation][index] }));
}

describe('fitAffine', () => {
  it.each([0, 90, 180, 270] as const)('round-trips coordinates at %s degrees', (rotation) => {
    const transform = fitAffine(calibrationForRotation(rotation));
    expect(transform).not.toBeNull();

    const vacuumPoint = { x: 325, y: 760 };
    const mapPoint = transform!.vacuumToMap(vacuumPoint);
    const roundTrip = transform!.mapToVacuum(mapPoint);

    expect(roundTrip.x).toBeCloseTo(vacuumPoint.x, 8);
    expect(roundTrip.y).toBeCloseTo(vacuumPoint.y, 8);
  });

  it('rejects a degenerate calibration basis', () => {
    const transform = fitAffine([
      { vacuum: { x: 0, y: 0 }, map: { x: 0, y: 0 } },
      { vacuum: { x: 1000, y: 0 }, map: { x: 10, y: 10 } },
      { vacuum: { x: 0, y: 1000 }, map: { x: 20, y: 20 } },
    ]);

    expect(transform).toBeNull();
  });

  it('rejects malformed calibration points', () => {
    const transform = fitAffine([
      { vacuum: { x: 0, y: 0 }, map: { x: 0, y: 0 } },
      { vacuum: { x: 1000, y: 0 }, map: { x: 100, y: 0 } },
      { vacuum: { x: 0, y: 1000 }, map: { x: Number.NaN, y: 100 } },
    ]);

    expect(transform).toBeNull();
  });

  it.each([
    { a: 2, b: 0, c: 50, d: 0, e: -3, f: 80 },
    { a: 0, b: 1.5, c: -20, d: -2, e: 0, f: 300 },
    { a: 1.2, b: 0.25, c: 15, d: -0.4, e: 0.9, f: -35 },
  ])('round-trips deterministic affine matrices', (matrix) => {
    const vacuumPoints = [
      { x: 0, y: 0 },
      { x: 1000, y: 0 },
      { x: 0, y: 1000 },
    ];
    const transform = fitAffine(
      vacuumPoints.map((vacuum) => ({
        vacuum,
        map: {
          x: matrix.a * vacuum.x + matrix.b * vacuum.y + matrix.c,
          y: matrix.d * vacuum.x + matrix.e * vacuum.y + matrix.f,
        },
      }))
    );
    const point = { x: 217, y: 643 };
    const roundTrip = transform!.mapToVacuum(transform!.vacuumToMap(point));

    expect(roundTrip.x).toBeCloseTo(point.x, 8);
    expect(roundTrip.y).toBeCloseTo(point.y, 8);
  });
});

describe('resolveMapTransform', () => {
  const dimensions: MapDimensions = {
    top: -500,
    left: -1000,
    height: 200,
    width: 300,
    gridSize: 50,
    scale: 2,
    padding: [4, 6, 8, 10],
    crop: [2, 3, 4, 5],
  };

  it.each([0, 90, 180, 270] as const)('round-trips dimensions at %s degrees', (rotation) => {
    const transform = resolveMapTransform({
      calibrationPoints: null,
      dimensions,
      rooms: [],
      rotation,
      imageWidth: 600,
      imageHeight: 400,
    });
    expect(transform?.source).toBe('dimensions');
    expect(transform?.commandSafe).toBe(true);

    const vacuumPoint = { x: 1350, y: 2750 };
    const mapPoint = transform!.vacuumToMap(vacuumPoint);
    const roundTrip = transform!.mapToVacuum(mapPoint);
    expect(roundTrip.x).toBeCloseTo(vacuumPoint.x, 8);
    expect(roundTrip.y).toBeCloseTo(vacuumPoint.y, 8);
  });

  it.each([
    [0, { x: 42, y: 382.96 }],
    [90, { x: 382.96, y: 564 }],
    [180, { x: 564, y: 25.04 }],
    [270, { x: 25.04, y: 42 }],
  ] as const)('matches the integration dimension formula at %s degrees', (rotation, expected) => {
    const transform = resolveMapTransform({
      calibrationPoints: null,
      dimensions,
      rooms: [],
      rotation,
      imageWidth: 600,
      imageHeight: 400,
    });

    const mapPoint = transform!.vacuumToMap({ x: 0, y: 0 });
    expect(mapPoint.x).toBeCloseTo(expected.x, 8);
    expect(mapPoint.y).toBeCloseTo(expected.y, 8);
  });

  it('marks room-derived geometry as visual-only', () => {
    const rooms: Room[] = [{ id: 1, name: 'Room', x0: 0, y0: 0, x1: 1000, y1: 1000 }];
    const transform = resolveMapTransform({
      calibrationPoints: null,
      dimensions: null,
      rooms,
      rotation: 0,
      imageWidth: 500,
      imageHeight: 400,
    });

    expect(transform?.source).toBe('room_estimate');
    expect(transform?.commandSafe).toBe(false);
    expect(convertUIZoneToVacuumZone({ x1: 10, y1: 10, x2: 20, y2: 20 }, transform, 500, 400)).toEqual({
      ok: false,
      reason: 'estimated_transform',
    });
  });
});

describe('convertUIZoneToVacuumZone', () => {
  it('uses the full affine inverse for the issue #99 rotated calibration', () => {
    const transform = fitAffine([
      { vacuum: { x: 0, y: 0 }, map: { x: 430, y: 206 } },
      { vacuum: { x: 1000, y: 0 }, map: { x: 430, y: 286 } },
      { vacuum: { x: 0, y: 1000 }, map: { x: 510, y: 206 } },
    ]);
    const result = convertUIZoneToVacuumZone({ x1: 30.8, y1: 27.8125, x2: 50.9, y2: 42.8125 }, transform, 800, 800);

    expect(result).toEqual({
      ok: true,
      zone: { x1: 206, y1: -2295, x2: 1706, y2: -285 },
    });
  });

  it('normalizes all four corners for a rotated basis', () => {
    const transform = fitAffine(calibrationForRotation(90));
    const result = convertUIZoneToVacuumZone({ x1: 20, y1: 30, x2: 60, y2: 70 }, transform, 100, 100);

    expect(result).toEqual({
      ok: true,
      zone: { x1: 250, y1: 125, x2: 750, y2: 625 },
    });
  });

  it('fails closed without a transform', () => {
    expect(convertUIZoneToVacuumZone({ x1: 10, y1: 10, x2: 20, y2: 20 }, null, 500, 400)).toEqual({
      ok: false,
      reason: 'no_transform',
    });
  });

  it('rejects invalid image dimensions', () => {
    const transform = fitAffine(calibrationForRotation(0));
    expect(convertUIZoneToVacuumZone({ x1: 10, y1: 10, x2: 20, y2: 20 }, transform, 0, 100)).toEqual({
      ok: false,
      reason: 'invalid_coordinates',
    });
  });

  it('rejects zero-area and implausibly large zones', () => {
    const normalTransform = fitAffine(calibrationForRotation(0));
    expect(convertUIZoneToVacuumZone({ x1: 10, y1: 10, x2: 10, y2: 20 }, normalTransform, 100, 100)).toEqual({
      ok: false,
      reason: 'unsafe_zone',
    });

    const largeTransform = fitAffine([
      { vacuum: { x: 0, y: 0 }, map: { x: 0, y: 0 } },
      { vacuum: { x: 100_000, y: 0 }, map: { x: 100, y: 0 } },
      { vacuum: { x: 0, y: 100_000 }, map: { x: 0, y: 100 } },
    ]);
    expect(convertUIZoneToVacuumZone({ x1: 0, y1: 0, x2: 100, y2: 100 }, largeTransform, 100, 100)).toEqual({
      ok: false,
      reason: 'unsafe_zone',
    });
  });

  it('sends every zone as its own coordinate array', () => {
    const transform = fitAffine(calibrationForRotation(90));
    const result = buildCleanZonePayload(
      [
        { x1: 20, y1: 30, x2: 60, y2: 70 },
        { x1: 0, y1: 0, x2: 10, y2: 20 },
      ],
      transform,
      100,
      100
    );

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.zones).toEqual([
      [250, 125, 750, 625],
      [-125, -125, 125, 0],
    ]);
  });

  it('does not build a payload when any zone fails conversion', () => {
    const transform = fitAffine(calibrationForRotation(0));
    expect(
      buildCleanZonePayload(
        [
          { x1: 10, y1: 10, x2: 20, y2: 30 },
          { x1: 10, y1: 10, x2: 10, y2: 20 },
        ],
        transform,
        100,
        100
      )
    ).toEqual({ ok: false, reason: 'unsafe_zone' });
  });
});

describe('buildCleanSpotPayload', () => {
  it.each([0, 90, 180, 270] as const)('converts multiple points at %s degrees', (rotation) => {
    const transform = fitAffine(calibrationForRotation(rotation));
    const result = buildCleanSpotPayload(
      [
        { x: 10, y: 10 },
        { x: 90, y: 90 },
      ],
      transform,
      100,
      100
    );

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.points).toHaveLength(2);
    expect(result.points.flat().every(Number.isInteger)).toBe(true);
  });

  it('uses the full affine inverse and preserves point order', () => {
    const transform = fitAffine(calibrationForRotation(90));

    expect(
      buildCleanSpotPayload(
        [
          { x: 20, y: 30 },
          { x: 60, y: 70 },
        ],
        transform,
        100,
        100
      )
    ).toEqual({
      ok: true,
      points: [
        [250, 125],
        [750, 625],
      ],
    });
  });

  it('fails closed for unsafe transforms and coordinates', () => {
    const estimatedTransform = resolveMapTransform({
      calibrationPoints: null,
      dimensions: null,
      rooms: [{ id: 1, name: 'Room', x0: 0, y0: 0, x1: 1000, y1: 1000 }],
      rotation: 0,
      imageWidth: 100,
      imageHeight: 100,
    });

    expect(buildCleanSpotPayload([{ x: 50, y: 50 }], estimatedTransform, 100, 100)).toEqual({
      ok: false,
      reason: 'estimated_transform',
    });
    expect(buildCleanSpotPayload([{ x: -1, y: 50 }], fitAffine(calibrationForRotation(0)), 100, 100)).toEqual({
      ok: false,
      reason: 'invalid_coordinates',
    });
    expect(buildCleanSpotPayload([{ x: 50, y: 50 }], fitAffine(calibrationForRotation(0)), 0, 100)).toEqual({
      ok: false,
      reason: 'invalid_coordinates',
    });
  });
});

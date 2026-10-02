import { describe, expect, it } from 'vitest';
import { readLiveMapFloor, resolveCleaningSelection } from '../mapFloor';

describe('readLiveMapFloor', () => {
  it('treats a missing selected map as a ready single floor', () => {
    expect(readLiveMapFloor(undefined, { map_id: 1, entity_picture: '/map?v=1' }, '/map?v=1')).toMatchObject({
      floorId: null,
      floorReady: true,
      imageReady: true,
    });
  });

  it('waits while the live camera still shows another floor', () => {
    expect(readLiveMapFloor(2, { map_id: 1, entity_picture: '/map?v=1' }, '/map?v=1').floorReady).toBe(false);
  });

  it('accepts the live camera once its map id matches the selection', () => {
    expect(readLiveMapFloor(2, { map_id: 2, entity_picture: '/map?v=2' }, '/map?v=2')).toMatchObject({
      floorId: 2,
      floorReady: true,
      imageReady: true,
    });
  });

  it('accepts a live map whose saved_map_id matches the selection even when map_id differs', () => {
    expect(readLiveMapFloor(19, { map_id: 1, saved_map_id: 19, entity_picture: '/map?v=1' }, '/map?v=1')).toMatchObject(
      {
        floorId: 19,
        floorReady: true,
        imageReady: true,
      }
    );
  });

  it('still waits when neither the live nor the saved map id matches the selection', () => {
    expect(
      readLiveMapFloor(19, { map_id: 1, saved_map_id: 20, entity_picture: '/map?v=1' }, '/map?v=1').floorReady
    ).toBe(false);
  });

  it('marks the image stale when the camera picture token changes', () => {
    const current = readLiveMapFloor(1, { map_id: 1, entity_picture: '/map?v=2' }, '/map?v=1');

    expect(current.imageToken).toBe('/map?v=2');
    expect(current.imageReady).toBe(false);
    expect(readLiveMapFloor(1, { map_id: 1, entity_picture: '/map?v=2' }, '/map?v=2').imageReady).toBe(true);
  });
});

describe('resolveCleaningSelection', () => {
  const floorOne = new Map([[1, 'Bathroom']]);
  const floorTwo = new Map([[9, 'Kitchen']]);

  it('drops the previous rooms while the next floor image is still loading', () => {
    const update = resolveCleaningSelection({
      floorChanged: true,
      mapReady: false,
      isSegmentCleaning: true,
      selectedRooms: floorOne,
      activeSegments: floorOne,
    });

    expect(update.clearZone).toBe(true);
    expect(update.selectRoomMode).toBe(false);
    expect([...(update.rooms?.keys() ?? [])]).toEqual([]);
  });

  it('refills from active segments only after the selected floor is ready', () => {
    const update = resolveCleaningSelection({
      floorChanged: false,
      mapReady: true,
      isSegmentCleaning: true,
      selectedRooms: new Map(),
      activeSegments: floorTwo,
    });

    expect(update.rooms).toBe(floorTwo);
    expect(update.selectRoomMode).toBe(true);
  });

  it('keeps the current selection when the same floor image reloads', () => {
    const update = resolveCleaningSelection({
      floorChanged: false,
      mapReady: false,
      isSegmentCleaning: true,
      selectedRooms: floorOne,
      activeSegments: floorOne,
    });

    expect(update.rooms).toBeNull();
    expect(update.clearZone).toBe(false);
  });
});

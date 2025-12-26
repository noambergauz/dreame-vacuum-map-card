import { Group, Text, Stack } from '@mantine/core';
import type { HassEntity } from '../types/homeassistant';

interface HeaderProps {
  entity: HassEntity;
  deviceName: string;
}

export function Header({ entity, deviceName }: HeaderProps) {
  const getStatusText = (state: string) => {
    const statusMap: Record<string, string> = {
      'cleaning': 'Cleaning',
      'returning': 'Returning to dock',
      'docked': 'Docked',
      'idle': 'Idle',
      'paused': 'Paused',
      'error': 'Error'
    };
    return statusMap[state] || state;
  };

  const getCleanedArea = () => entity.attributes.cleaned_area || '--';
  const getCleaningTime = () => {
    const time = entity.attributes.cleaning_time;
    return time ? Math.round(time / 60) : '--';
  };
  const getBatteryLevel = () => entity.attributes.battery_level || '--';

  return (
    <Stack gap="xs" style={{ padding: '20px 20px 10px', textAlign: 'center' }}>
      <Text size="xl" fw={600}>{deviceName}</Text>
      <Text size="md" c="dimmed">{getStatusText(entity.state)}</Text>
      
      <Group justify="space-around" style={{ padding: '0 20px 20px' }}>
        <Stack gap={4} align="center">
          <Text size="xl">🏠</Text>
          <Text size="xl" fw={600}>{getCleanedArea()}</Text>
          <Text size="xs" c="dimmed">m²</Text>
        </Stack>
        <Stack gap={4} align="center">
          <Text size="xl">⏱️</Text>
          <Text size="xl" fw={600}>{getCleaningTime()}</Text>
          <Text size="xs" c="dimmed">min</Text>
        </Stack>
        <Stack gap={4} align="center">
          <Text size="xl">🔋</Text>
          <Text size="xl" fw={600}>{getBatteryLevel()}</Text>
          <Text size="xs" c="dimmed">%</Text>
        </Stack>
      </Group>
    </Stack>
  );
}

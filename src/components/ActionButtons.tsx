import { Button, Group } from '@mantine/core';
import type { CleaningMode } from '../types/homeassistant';

interface ActionButtonsProps {
  selectedMode: CleaningMode;
  selectedRoomsCount: number;
  onClean: () => void;
  onDock: () => void;
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  onClean,
  onDock,
}: ActionButtonsProps) {
  const getCleanButtonText = () => {
    switch (selectedMode) {
      case 'room':
        return selectedRoomsCount > 0
          ? `🏠 Clean ${selectedRoomsCount} Room${selectedRoomsCount > 1 ? 's' : ''}`
          : '🏠 Select Rooms';
      case 'all':
        return '▶️ Clean All';
      case 'zone':
        return '📍 Zone Clean';
      default:
        return '▶️ Clean';
    }
  };

  return (
    <Group gap="md" style={{ marginTop: '15px' }}>
      <Button
        fullWidth
        size="lg"
        onClick={onClean}
        style={{
          flex: 1,
          borderRadius: '15px',
          background: '#007aff',
          boxShadow: '0 4px 15px rgba(0,122,255,0.3)',
        }}
      >
        {getCleanButtonText()}
      </Button>
      <Button
        fullWidth
        size="lg"
        variant="light"
        onClick={onDock}
        style={{
          flex: 1,
          borderRadius: '15px',
          background: 'rgba(0,0,0,0.05)',
          color: '#1a1a1a',
        }}
      >
        🏠 Dock
      </Button>
    </Group>
  );
}

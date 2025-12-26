import { Button, Group } from '@mantine/core';
import type { CleaningMode } from '../types/homeassistant';

interface ModeTabsProps {
  selectedMode: CleaningMode;
  onModeChange: (mode: CleaningMode) => void;
}

export function ModeTabs({ selectedMode, onModeChange }: ModeTabsProps) {
  const modes: { value: CleaningMode; label: string }[] = [
    { value: 'room', label: 'Room' },
    { value: 'all', label: 'All' },
    { value: 'zone', label: 'Zone' },
  ];

  return (
    <Group
      gap={0}
      style={{
        background: 'rgba(0,0,0,0.05)',
        borderRadius: '15px',
        padding: '4px',
        marginBottom: '15px',
      }}
    >
      {modes.map((mode) => (
        <Button
          key={mode.value}
          variant={selectedMode === mode.value ? 'filled' : 'subtle'}
          onClick={() => onModeChange(mode.value)}
          style={{
            flex: 1,
            borderRadius: '11px',
            fontWeight: 500,
          }}
          styles={{
            root: {
              backgroundColor: selectedMode === mode.value ? '#007aff' : 'transparent',
              color: selectedMode === mode.value ? 'white' : '#666',
              boxShadow: selectedMode === mode.value ? '0 2px 8px rgba(0,122,255,0.3)' : 'none',
            },
          }}
        >
          {mode.label}
        </Button>
      ))}
    </Group>
  );
}

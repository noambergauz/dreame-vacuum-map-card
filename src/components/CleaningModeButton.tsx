import { Button, Group } from '@mantine/core';
import type { CleaningStrategy } from '../types/homeassistant';

interface CleaningModeButtonProps {
  cleaningMode: CleaningStrategy;
  onClick: () => void;
}

export function CleaningModeButton({ cleaningMode, onClick }: CleaningModeButtonProps) {
  return (
    <Button
      variant="subtle"
      fullWidth
      onClick={onClick}
      style={{
        margin: '10px 20px',
        background: '#fff',
        borderRadius: '12px',
        padding: '12px 16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        height: 'auto',
        color: '#1a1a1a',
        fontWeight: 400,
        fontSize: '15px',
      }}
      styles={{
        inner: { justifyContent: 'space-between' },
      }}
    >
      <Group gap="sm">
        <span>💧</span>
        <span>{cleaningMode}</span>
      </Group>
      <span>›</span>
    </Button>
  );
}

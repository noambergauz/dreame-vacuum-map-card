import { Drawer, Button, Group, Stack, Text, Box, Grid, Switch } from '@mantine/core';
import type { CleaningStrategy } from '../types/homeassistant';

interface CleaningModeModalProps {
  opened: boolean;
  onClose: () => void;
  cleaningMode: CleaningStrategy;
  onModeChange: (mode: CleaningStrategy) => void;
}

export function CleaningModeModal({
  opened,
  onClose,
  cleaningMode,
  onModeChange,
}: CleaningModeModalProps) {
  const cleaningModes = [
    { id: 'vac-mop', label: 'Vac & Mop', color: '#34C759' },
    { id: 'vac-then-mop', label: 'Vac then Mop', color: '#007AFF' },
    { id: 'vacuum', label: 'Vacuum', color: '#FF9500' },
    { id: 'mop', label: 'Mop', color: '#00C7BE' },
  ];

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      position="bottom"
      size="auto"
      styles={{
        content: { borderRadius: '20px 20px 0 0' },
        body: { padding: 0 },
      }}
    >
      <Stack gap="md" style={{ padding: '0 20px 20px' }}>
        {/* Handle */}
        <Box
          style={{
            width: '36px',
            height: '5px',
            background: 'rgba(0,0,0,0.15)',
            borderRadius: '3px',
            margin: '12px auto',
          }}
        />

        {/* Mode Toggle */}
        <Group gap="sm">
          <Button
            variant={cleaningMode === 'CleanGenius' ? 'filled' : 'subtle'}
            onClick={() => onModeChange('CleanGenius')}
            style={{ flex: 1, borderRadius: '12px' }}
            styles={{
              root: {
                backgroundColor: cleaningMode === 'CleanGenius' ? 'white' : 'rgba(0,0,0,0.05)',
                color: cleaningMode === 'CleanGenius' ? '#1a1a1a' : '#666',
                boxShadow: cleaningMode === 'CleanGenius' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
              },
            }}
          >
            CleanGenius
          </Button>
          <Button
            variant={cleaningMode === 'Custom' ? 'filled' : 'subtle'}
            onClick={() => onModeChange('Custom')}
            style={{ flex: 1, borderRadius: '12px' }}
            styles={{
              root: {
                backgroundColor: cleaningMode === 'Custom' ? 'white' : 'rgba(0,0,0,0.05)',
                color: cleaningMode === 'Custom' ? '#1a1a1a' : '#666',
                boxShadow: cleaningMode === 'Custom' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
              },
            }}
          >
            Custom
          </Button>
        </Group>

        {/* Free your hands section */}
        <Stack gap="xs">
          <Text size="sm" c="dimmed" fw={500}>
            Free your hands
          </Text>
          <Grid gutter="sm">
            {cleaningModes.map((mode) => (
              <Grid.Col key={mode.id} span={6}>
                <Box
                  style={{
                    aspectRatio: 1,
                    border: '2px solid rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    background: 'white',
                    position: 'relative',
                  }}
                >
                  <Box
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: mode.color,
                      marginBottom: '8px',
                    }}
                  />
                  <Text size="sm" fw={500}>
                    {mode.label}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>

        {/* Intelligent Recommended Cleaning Parameters */}
        <Stack gap="xs">
          <Text size="sm" c="dimmed" fw={500}>
            Intelligent Recommended Cleaning Parameters
          </Text>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              background: 'rgba(0,0,0,0.03)',
              borderRadius: '12px',
            }}
          >
            <Text size="sm">Reclean dirty rooms/zones (Optional)</Text>
            <Switch />
          </Box>
        </Stack>

        {/* Cleaning Mode */}
        <Stack gap="xs">
          <Text size="sm" c="dimmed" fw={500}>
            Cleaning Mode
          </Text>
          <Grid gutter="sm">
            <Grid.Col span={6}>
              <Box
                style={{
                  aspectRatio: 1,
                  border: '2px solid #FFD700',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: 'white',
                  boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.2)',
                }}
              >
                <Box
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#34C759',
                    marginBottom: '8px',
                  }}
                />
                <Text size="sm" fw={500}>
                  Vac & Mop
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={6}>
              <Box
                style={{
                  aspectRatio: 1,
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: 'white',
                }}
              >
                <Box
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#007AFF',
                    marginBottom: '8px',
                  }}
                />
                <Text size="sm" fw={500}>
                  Mop after Vac
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Stack>

        {/* Deep Cleaning */}
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            background: 'rgba(0,0,0,0.03)',
            borderRadius: '12px',
          }}
        >
          <Text size="sm">Deep Cleaning</Text>
          <Switch />
        </Box>
      </Stack>
    </Drawer>
  );
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'DreameVacuumMapCard',
      fileName: 'dreame-vacuum-map-card',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
})


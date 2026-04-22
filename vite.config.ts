import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import type { OutputBundle, OutputChunk, OutputAsset } from 'rollup';
import { resolve } from 'path';

function inlineCSS(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build' as const,
    enforce: 'post' as const,
    generateBundle(_options: unknown, bundle: OutputBundle) {
      const cssFiles = Object.keys(bundle).filter((key) => key.endsWith('.css'));
      const jsFiles = Object.keys(bundle).filter((key) => key.endsWith('.js'));

      if (cssFiles.length > 0 && jsFiles.length > 0) {
        const cssFile = bundle[cssFiles[0]] as OutputAsset;
        const jsFile = bundle[jsFiles[0]] as OutputChunk;

        const cssContent = cssFile.source;
        const cssInjectionCode = `
(function() {
  const style = document.createElement('style');
  style.textContent = ${JSON.stringify(cssContent)};
  document.head.appendChild(style);
})();
`;

        jsFile.code = cssInjectionCode + jsFile.code;
        delete bundle[cssFiles[0]];
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'DreameVacuumMapCard',
      fileName: 'dreame-vacuum-map-card',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

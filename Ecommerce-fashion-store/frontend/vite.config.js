// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configurations...
  resolve: {
    alias: {
      // Example alias for SVG directory
      '@svgs': '/src/svgs',
    },
  },
});

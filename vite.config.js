// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  // Configuración adicional para desarrollo
  server: {
   open: true, // Abre el navegador automáticamente
    hmr: true,  // Habilita Hot Module Replacement
  },
  build: {
    outDir: 'dist',
  },
});
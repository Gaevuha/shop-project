import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path'; 

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '!**/sprite.svg', // Ігнорувати спрайт для svgr
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Додайте аліас для зручності
    },
  },
})
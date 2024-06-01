import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server:{
    host: 'test.me',
    port: 5173,
    cors: true,
  },

  build: {
    outDir: 'dist', // Specify the output directory
    sourcemap: true, // Optional: for debugging purposes
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: { watch: { usePolling: true } },
  plugins: [react()],
  base: '/quizz-testTask/',
  build: {
    outDir: 'dist',
    assetsDir: '.',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

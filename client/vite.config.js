import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://estate2.onrender.com',
        secure: true, 
        changeOrigin: true, 
      },
    },
  },
  plugins: [react()],
});

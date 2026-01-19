import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4002,
    allowedHosts: ['artofkaren.com'],
    proxy: {
      '/api': {
        target: 'http://192.168.2.30:4001',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://192.168.2.30:4001',
        changeOrigin: true
      }
    }
  }
})

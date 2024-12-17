import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable proper source maps for debugging
  },
  server: {
    host: '0.0.0.0', // Ensure the server listens on all interfaces
    port: 8000,      // Set the port for the app
    proxy: {
      '/v1': 'http://go-backend:8080', // Proxy requests to the Go backend (using container name)
    },
  },
})

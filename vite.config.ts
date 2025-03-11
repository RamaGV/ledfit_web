import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deshabilitar hmr overlay para evitar que aparezca la ventana de error
  server: {
    hmr: {
      overlay: false,
    },
  }
})

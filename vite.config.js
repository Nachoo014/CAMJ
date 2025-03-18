import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Mantén esto para evitar problemas en Hostinger
  server: {
    historyApiFallback: true, // Redirige todas las rutas a index.html
  },
});
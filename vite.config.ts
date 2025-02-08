import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa' 


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  VitePWA({
    registerType: 'autoUpdate', 
    manifest: {
      name: 'FitTrack', 
      short_name: 'FitTrack', 
      description: 'aplicación fitness', 
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png', 
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable' 
        }
      ]
    }
  }), tailwindcss(),],
})

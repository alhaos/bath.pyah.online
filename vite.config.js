// vite.config.js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Баня Пыть-Ях',
                short_name: 'bath.pyah.online',
                description: 'bath.pyah.online',
                theme_color: '#000000',
                background_color: '#ffffff',
                display: 'standalone',
                icons: [
                    {
                        src: 'logo.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    },
                    {
                        src: 'logo.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml'
                    }
                ]
            },
            workbox: {
                globPatterns: []
            }
        })
    ]
})
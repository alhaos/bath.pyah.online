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
                name: 'Мое приложение',
                short_name: 'MyApp',
                description: 'Мое крутое приложение',
                theme_color: '#000000',
                background_color: '#ffffff',
                display: 'standalone', // ← это для полноэкранного режима!
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            // Отключаем генерацию service worker если не нужен
            workbox: {
                globPatterns: [] // пустой массив = не кэшируем ничего
            }
        })
    ]
})
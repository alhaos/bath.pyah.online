// sw.js - ОБНОВЛЕННАЯ ВЕРСИЯ
const CACHE_VERSION = 'v2.0'; // МЕНЯЙ ПРИ КАЖДОМ ОБНОВЛЕНИИ!

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Принудительная активация
    console.log('New SW installing...');
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Удаляем ВСЕ старые кэши
                    console.log('Deleting cache:', cacheName);
                    return caches.delete(cacheName);
                })
            );
        }).then(() => {
            console.log('New SW activated, caches cleared');
            return self.clients.claim(); // Принудительно берем управление
        })
    );
});

// Network Only - БЕЗ КЭШИРОВАНИЯ
self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request));
});
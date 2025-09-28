// sw.js - ВЕРСИЯ ДЛЯ КЛИЕНТОВ
const CACHE_NAME = 'app-v' + Date.now(); // Уникальное имя каждый деплой

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Немедленная активация
    console.log('🔄 NEW VERSION INSTALLED:', CACHE_NAME);
});

self.addEventListener('activate', (event) => {
    alert("test message")
    event.waitUntil(
        caches.keys().then(cacheNames => {
            console.log('🗑️ Deleting old caches:', cacheNames);
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Удаляем ВСЕ старые кэши
                    return caches.delete(cacheName);
                })
            );
        }).then(() => {
            console.log('✅ All old caches deleted');
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', (event) => {
    // Network Only - НИЧЕГО не кэшируем
    event.respondWith(
        fetch(event.request)
            .catch(error => {
                console.log('🌐 Network failed:', error);
                // Только если офлайн - пробуем кэш
                return caches.match(event.request)
                    .then(cachedResponse => {
                        if (cachedResponse) {
                            console.log('📦 Serving from cache (offline mode)');
                            return cachedResponse;
                        }
                        // Офлайн страница
                        return new Response(`
                            <html>
                                <body style="padding: 20px; text-align: center;">
                                    <h1>Офлайн</h1>
                                    <p>Нет соединения с интернетом</p>
                                    <button onclick="location.reload()">Попробовать снова</button>
                                </body>
                            </html>
                        `, {
                            headers: {'Content-Type': 'text/html'}
                        });
                    });
            })
    );
});
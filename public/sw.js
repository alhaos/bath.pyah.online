// sw-nuclear.js
self.addEventListener('install', (event) => {
    self.skipWaiting();
    // Не кэшируем ничего при установке
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => caches.delete(cacheName))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // ВСЕГДА загружаем из сети, никогда из кэша
    event.respondWith(
        fetch(event.request)
            .catch(error => {
                // Только если офлайн - показываем простую страницу
                return new Response(`
                    <html>
                        <body>
                            <h1>Офлайн</h1>
                            <p>Нет соединения с интернетом</p>
                        </body>
                    </html>
                `, {
                    headers: {'Content-Type': 'text/html'}
                });
            })
    );
});
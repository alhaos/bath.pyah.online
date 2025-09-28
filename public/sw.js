self.addEventListener('install', () => {
    self.skipWaiting(); // Принудительная активация
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.url.includes('/')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const responseClone = response.clone();
                    caches.open('dynamic-cache')
                        .then(cache => cache.put(event.request, responseClone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    }
});
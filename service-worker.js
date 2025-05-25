self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pill-reminder-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        'index.html',
        'style.css',
        'app.js',
        'manifest.json',
        'icon.png'
      ]);
    })
  );
  self.skipWaiting(); // Activate the new worker immediately
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

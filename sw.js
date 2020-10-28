//const cacheName = 'mod_pwa-v9';
var CACHE_NAME = 'mod_pwa-v10';
//const staticAssets = [
var urlsToCache = [
  './index.html',
  './css/style.css',
  // './main.js',
  // './app.js',
  './img/mode.jpg',
  './img/img_mod.png'
];

// self.addEventListener('install', async e => {
//   const cache = await caches.open(cacheName);
//   await cache.addAll(urlsToCache);
//   return self.skipWaiting();
// });
//
// self.addEventListener('activate', e => {
//   self.clients.claim();
// });
//
// self.addEventListener('fetch', async e => {
//   const req = e.request;
//   const url = new URL(req.url);
//
//   if (url.origin === location.origin) {
//     e.respondWith(cacheFirst(req));
//   } else {
//     e.respondWith(networkAndCache(req));
//   }
// });
//
// async function cacheFirst(req) {
//   const cache = await caches.open(cacheName);
//   const cached = await cache.match(req);
//   return cached || fetch(req);
// }
//
// async function networkAndCache(req) {
//   const cache = await caches.open(cacheName);
//   try {
//     const fresh = await fetch(req);
//     await cache.put(req, fresh.clone());
//     return fresh;
//   } catch (e) {
//     const cached = await cache.match(req);
//     return cached;
//   }
// }

// self.addEventListener('install', async evt => {
//   var cache = await caches.open(cacheName);
//   await cache.addAll(staticAssets);
//   return self.skipWaiting();
// })
//
//
//
// keep fetching the requests from the user
// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request).then(function(response) {
//             // Cache hit - return response
//             if (response) return response;
//             return fetch(event.request);
//         })
//     );
// });
//
// self.addEventListener('activate', function(event) {
//     var cacheWhitelist = []; // add cache names which you do not want to delete
//     cacheWhitelist.push(static_cash_name);
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//         return Promise.all(
//             cacheNames.map(function(cacheName) {
//                 if (!cacheWhitelist.includes(cacheName)) {
//                     return caches.delete(cacheName);
//                 }
//             })
//         );
//         })
//    );
//});

// Install the service worker and open the cache and add files mentioned in array to cache
self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open(CACHE_NAME)
        .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});


// keep fetching the requests from the user
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) return response;
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    var cacheWhitelist = []; // add cache names which you do not want to delete
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        );
        })
    );
});

importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('janajurakova').then(function(cache) {
            return cache.addAll([
                //https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
                //service-worker.js:21 https://platform.instagram.com/en_US/embeds.js
                //service-worker.js:21 https://www.gstatic.com/firebasejs/4.4.0/firebase.js
                '/inline.bundle.js',
                '/polyfills.bundle.js',
                '/scripts.bundle.js',
                '/styles.bundle.js',
                '/vendor.bundle.js',
                '/main.bundle.js'
            // ,
            // '/welcome',
            // '/welcome/?utm_source=homescreen',
            // '/?utm_source=homescreen',
            // '/about-me'//,
            // '/styles/main.css',
            // '/scripts/main.min.js',
            // '/sounds/airhorn.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('Fetch Event: ' + event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                console.log('Cache matched: ' + response.url);
                return response;
            }

            return fetch(event.request);
        })
    );
});
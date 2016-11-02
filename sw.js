// Service Worker Toolbox
/*import trolbox from 'sw-toolbox';*/
/*console.log(trolbox);*/
importScripts('./sw-toolbox.js');
/*console.log(trolbox);*/

// Offline Google Analytics
/*importScripts('js/lib/sw-offline-google-analytics.js');
goog.offlineGoogleAnalytics.initialize();*/

// Files to precache
const precacheFiles = [
    './',
    './index.html',
    './404.html',
    './bundle.js',
    './style/style.css',
    'https://www.planwallpaper.com/static/images/kartandtinki1_photo-wallpapers_02.jpg',

    'assets/images/logo.png',
    'assets/images/main.jpg'

    /*'./css/main.css',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Inconsolata|Lora:400,400i,700|Source+Sans+Pro:400,700',

    './js/bundle.js',

    './img/profile.png'*/
];
toolbox.precache(precacheFiles);

// Install and Activate events
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Fetch events
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});

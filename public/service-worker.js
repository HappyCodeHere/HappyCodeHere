// Service Worker Toolbox
/*import trolbox from 'sw-toolbox';*/
/*console.log(trolbox);*/

var cacheName = 'ScheduleApp-1';
var dataCacheName = 'ScheduleApp-v1';
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
/*self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));*/

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(precacheFiles);
    })
  );
});

self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));



// Fetch events
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});


/*self.addEventListener('push', function(event) {
  console.log('Push message', event);

  var title = 'Push message';

  event.waitUntil(
    self.registration.showNotification(title, {
     body: 'The Message',
     icon: 'images/icon.png',
     tag: 'my-tag'
   }));
});*/

self.addEventListener('notificationclick', function(event) {
  console.log('Notification click: tag', event.notification.tag);
  // Android doesn't close the notification when you click it
  // See http://crbug.com/463146
  event.notification.close();
  var url = 'https://youtu.be/gYMkEMCHtJ4';
  // Check if there's already a tab open with this URL.
  // If yes: focus on the tab.
  // If no: open a tab with the URL.
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
    .then(function(windowClients) {
      console.log('WindowClients', windowClients);
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        console.log('WindowClient', client);
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
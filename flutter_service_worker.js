'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eec5fc8f7e0497d0298e04a053aa3e0b",
"assets/assets/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/assets/note3.wav": "ec8173470a0186fdecf2f6935260eb56",
"assets/assets/note4.wav": "7817b629210c6d879b493439bcded62b",
"assets/assets/note5.wav": "69f4c1dd58b17a67a632ed106f203afc",
"assets/assets/note6.wav": "c713df4bb4bb1b6b11d041d97387d959",
"assets/assets/note7.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "2de84d03d7377669f89c791efdd1642d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "acfcf44e20b1e6a416a652b4312f6564",
"icons/Icon-192.png": "127449058e3548ad4834d7e50a99afe6",
"icons/Icon-512.png": "4b4f36bcb0609a17d2673ef9e9332aee",
"index.html": "97e671d801be341b161a815dff5c610c",
"/": "97e671d801be341b161a815dff5c610c",
"main.dart.js": "c6e03ee6eaaa18e0dfdf9281a155b5d3",
"manifest.json": "cc1cf6c81821cd73d30f0770cf204ef3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

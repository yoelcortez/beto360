const CACHE_NAME = 'mi-app-v1';
const ARCHIVOS_A_GUARDAR = [
  './',
  './index.html',
  './manifest.json'
];

// 1. Instalar y guardar los archivos en caché
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARCHIVOS_A_GUARDAR);
    })
  );
});

// 2. Responder con los archivos guardados cuando no haya internet
self.addEventListener('fetch', (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((respuesta) => {
      return respuesta || fetch(evento.request);
    })
  );
});

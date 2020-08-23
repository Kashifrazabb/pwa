const CacheName = 'MyCache'
const CacheURLS = ['/','/favicon.ico','/services','/about','/index.html','/static/js/main.chunk.js','/static/js/1.chunk.js','/static/js/bundle.js']

this.addEventListener('install',e => 
    e.waitUntil(caches.open(CacheName)
    .then(cache=>cache.addAll(CacheURLS))
    )
)


this.addEventListener('fetch',e => 
    !navigator.onLine &&
    e.respondWith(caches.match(e.request)
    .then(res=>res?res:fetch(e.request.clone())))
)
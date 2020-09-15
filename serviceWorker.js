//service worker is the main tech that is doing the work for the PWA
self.addEventListener('install',function(event){
    console.log('sw installed');
    event.waitUntil(
        caches.open('static')
             .then(function(cache) {
                 cache.addAll([

                    '/',
                    '/index.html',
                    '/index.js',
                    '/css/bootstrap.css',
                    "img/icon-144x144.png",
                    "img/ethereum.jpg",
                    "img/bitcoin3.jpg",
                    "img/bitcoin4.jpg",
            
                 ]);
                 
             })
    );
});





self.addEventListener('activate', function(){
    console.log('sw Activated');
});

self.addEventListener('fetch',function(event){
    console.log('fetching');
    event.respondWith(
        caches.match(event.request)
        .then(function(res){
            if(res){
                return res;
            }else{
                return fetch (event.request);
            }
        })
    );
});
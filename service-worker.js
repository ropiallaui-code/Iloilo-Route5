self.addEventListener("install",function(e){
})
    e.waitUntil(    
        caches.open("pwa route-cache").then(function(cache){
         return cache.addAll(["index.html"])
     })
    
    );
    self.addEventListener("install", function (e) {

}); 
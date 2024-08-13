console.log("load")
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
    registration.unregister();
  }
});
caches.keys().then(function(keys) {
  let promises = [];
  keys.forEach(function(cacheName) {
    if (cacheName) {
      promises.push(caches.delete(cacheName));
    }
  });
});
console.log("finished")
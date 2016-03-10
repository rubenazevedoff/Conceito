// Register our ServiceWorker
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js", {
    scope: "/"
  }).then(function (reg) {
    console.log("SW register success", reg);
  }, function (err) {
    console.log("SW register fail", err);
  });
}
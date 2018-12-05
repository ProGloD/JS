function giveMePromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Hello from promise");
    }, 1000);
  });
}

giveMePromise().then(function(msg) {
  console.log(msg);
});
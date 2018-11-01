function a() {
  console.log("Function one!");
}

function b(cb) {
  setTimeout(function() {
    console.log("Function two!");
    cb();
  }, 1000);
}

function c() {
  console.log("Function three!");
}

a();
b(function() {
  c()
});
function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

console.log(addFive(double(10))); // expected 25
console.log(double(addFive(10))); // expecter 30
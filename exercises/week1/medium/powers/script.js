function powers(array, power) {
  for (var i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], power);
  }
  return array;
}
console.log(powers([1, 2, 3], 2)); // -> [1, 4, 9]
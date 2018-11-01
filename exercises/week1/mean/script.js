function mean(arr) {
  let length = arr.length;
  return arr.reduce((acc, cur) => acc + cur) / length;
}

console.log(mean([1, 2, 3, 4, 5])); // => 3
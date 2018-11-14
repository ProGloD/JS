function sum(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }

  return sum;
}

console.log(sum([1, 2, 3])); // -> 6
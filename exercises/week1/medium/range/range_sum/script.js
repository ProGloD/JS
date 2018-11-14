function rangeSum(start, end) {
  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }

  let sum = 0;
  for (let i of arr) {
    sum += i;
  }

  return sum;
}

console.log(rangeSum(1, 4)); // -> 6
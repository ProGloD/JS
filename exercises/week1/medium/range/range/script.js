function range(start, end) {
  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(range(4, 10)); // -> [4, 5, 6, 7, 8, 9]
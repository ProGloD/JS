function intersect(arr1, arr2) {
  let arr = [];
  for (let i of arr1) {
    for (let e of arr2) {
      if (e === i) {
        arr.push(e);
      }
    }
  }

  return arr;
}

console.log(intersect([1, 2, 3, 4, 5], [2, 7, 8, 5])); // ->[2, 5]
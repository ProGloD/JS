function alternate(arr1, arr2) {
  let newList = []
  for (let i = 0; i < arr1.length; i++) {
    newList.push(arr1[i]);
    newList.push(arr2[i]);
  }

  console.log(newList);
}

alternate(['a', 'b', 'c'], [1, 2, 3]); // -> ['a', 1, 'b', 2, 'c', 3]
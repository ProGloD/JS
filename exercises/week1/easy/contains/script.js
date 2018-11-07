function contains(arr, value) {
  //om finns i arrayen returtera true, annars false
  return arr.includes(value);
}

console.log(contains([1, 2, 3], 2)); // -> true
console.log(contains(["dog", "cat"], "cat")); // -> true
console.log(contains(["banana", "carrot"], "orange")); // -> false
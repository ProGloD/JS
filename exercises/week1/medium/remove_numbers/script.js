function removeNumbers(arr) {
  return arr.filter(word => typeof word !== "number");
}

console.log(removeNumbers(['hello', '2', 3, 138, 'banana'])); // -> ['hello', '2', 'banana']
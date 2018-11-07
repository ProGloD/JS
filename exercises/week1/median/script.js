function median(arr) {
  debugger;
  arr.sort();
  var half = Math.floor(arr.length / 2);

  if (arr.length % 2)
    return arr[half];
  else
    return (arr[half - 1] + arr[half]) / 2;

  // one row solution
  //return arr.length % 2 ? arr[half] : (arr[half - 1] + arr[half]) / 2.0;
}

console.log(median([1, 6, 4])); // => 4
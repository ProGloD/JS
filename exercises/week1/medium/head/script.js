function head(arr, num) {
  let newArr = arr.splice(0, num);
  console.log(newArr);
}

function tail(arr, num) {
  debugger;
  let newArr = arr.splice(arr.length - num, num);
  console.log(newArr);
}
head([4, 10, 3, 6, 5], 3) // -> [4, 10, 3]
tail([4, 10, 3, 6, 5], 3) // -> [3, 6, 5]
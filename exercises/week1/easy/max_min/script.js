//        *** maximum ***
function maximum(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
var array1 = [2, 3, 1];
console.log(maximum(array1));

//        *** minimum ***
function minimum(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
var array1 = [2, 3, 1];
console.log(minimum(array1));
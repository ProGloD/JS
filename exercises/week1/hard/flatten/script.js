//        *** flatten ***
function flatten(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}
var array = [
  [
    [0],
    [1]
  ],
  [
    [2],
    [3]
  ],
  [
    [4],
    [5]
  ]
];
console.log(flatten(array));
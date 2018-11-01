/*
function doubleAll(arr) {
  return arr.map(function(num) {
    return num * 2;
  });
}
*/
/*
// one row solution
function doubleAll(arr) {
  return arr.map(num => num * 2);
}
*/

function doubleAll(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    accumulator.push(currentValue * 2);
    return accumulator;
  }, []);
}
console.log(doubleAll([1, 2, 3]));
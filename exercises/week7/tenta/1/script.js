/* Implement your solution here */
function min(arr) {
  let min = arr[0].value;
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].value < min) {
      min = arr[i].value;
      index = i;
    }
  }

  return arr[index];
}




/* Do not touch the code below this line, but make sure the examples work */

if (min([{
    value: 3
  }, {
    value: 7
  }, {
    value: -1
  }, {
    value: 5
  }, {
    value: 100
  }]).value !== -1) console.error('Invalid solution');
else console.log('Solved!');
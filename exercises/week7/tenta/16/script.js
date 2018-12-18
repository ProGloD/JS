/* Implement your solution here */
function depth(obj) {
  let length = 1;
  if (obj.value) {
    length += depth(obj.value);
  }

  return length;
}

/* Do not touch anything below this line */
let c = depth({
  value: {
    value: {
      value: {
        value: {
          value: {
            value: null,
          }
        }
      }
    }
  }
});
if (c === 6) console.log('Solved!');
else console.error('Invalid solution');
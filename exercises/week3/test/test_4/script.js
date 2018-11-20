let arr = [{
  value: 6
}, {
  value: 9
}, {
  value: 23
}, {
  value: 55
}];
let sum = 0;

for (let i of arr) {
  sum += i.value;
}

console.log(sum);
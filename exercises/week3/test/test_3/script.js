let arr = [2, 99, 47, 32, 5];
let sum = 0;
for (let i of arr) {
  if (i > 10) {
    sum += i;
  }
}

console.log(sum);
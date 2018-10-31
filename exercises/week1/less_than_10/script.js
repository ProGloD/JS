let answer = [];

function lessThan10(arr) {
  for (let i of arr) {
    i < 10 ? answer.push(i) : "";
  }
  return answer;
}

console.log(lessThan10([1, 2, 4, 8, 16, 32]));
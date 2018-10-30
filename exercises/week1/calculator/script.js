let button = document.querySelector("button").addEventListener("click", calc);
let input = document.querySelector("input");
let span = document.querySelector("span");

function calc() {
  let toCalc = input.value.trim();
  let arr = toCalc.split(" ");

  span.textContent = doCalc(arr);
}

function doCalc(arr) {
  let i;
  let firstNum;
  let secondNum;

  while (arr.includes("*")) {
    i = arr.indexOf("*");
    firstNum = parseFloat(arr[i - 1]);
    secondNum = parseFloat(arr[i + 1]);
    arr[i - 1] = firstNum * secondNum;
    arr.splice(i, 2);
  }

  while (arr.includes("/")) {
    i = arr.indexOf("/");
    firstNum = parseFloat(arr[i - 1]);
    secondNum = parseFloat(arr[i + 1]);
    arr[i - 1] = firstNum / secondNum;
    arr.splice(i, 2);
  }

  while (arr.includes("+") || arr.includes("-")) {
    i = 1;
    if (arr[i] === "+") {
      firstNum = parseFloat(arr[i - 1]);
      secondNum = parseFloat(arr[i + 1]);
      arr[i - 1] = firstNum + secondNum;
      arr.splice(i, 2);
    }
    if (arr[i] === "-") {
      firstNum = parseFloat(arr[i - 1]);
      secondNum = parseFloat(arr[i + 1]);
      arr[i - 1] = firstNum - secondNum;
      arr.splice(i, 2);
    }
  }

  return arr[0];
}
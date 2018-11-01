document.querySelector("#buttonEq").addEventListener("click", doCalc);
document.querySelector("#buttonClear").addEventListener("click", clear);
let inputBtns = document.querySelectorAll(".input");
let todoBtns = document.querySelectorAll(".todo");
let output = document.querySelector("h1");
let arr = [];
let removed = true;

for (let btn of inputBtns) {
  btn.addEventListener("click", input);
}

for (let btn of todoBtns) {
  btn.addEventListener("click", todo);
}

function input(e) {
  if (!removed) {
    output.textContent = "";
    removed = true;
  }
  output.textContent += e.target.textContent;
}

function todo(e) {
  arr.push(output.textContent);
  output.textContent = e.target.textContent;
  arr.push(e.target.textContent);
  removed = false;
}

function clear(e) {
  arr = [];
  output.textContent = "";
}

function doCalc(e) {
  arr.push(output.textContent);
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

  output.textContent = arr[0].toFixed(2);
  removed = false;
}
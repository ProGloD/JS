document.querySelector("#buttonEq").addEventListener("click", calc);
document.querySelector("#buttonClear").addEventListener("click", clear);
let inputBtns = document.querySelectorAll(".input");
let todoBtns = document.querySelectorAll(".todo");
let output = document.querySelector("h1");
let equ = document.querySelector("#equ");
let problem = [];

addClickListener(inputBtns, input);
addClickListener(todoBtns, todo);

function addClickListener(list, f) {
  for (let btn of list) {
    btn.addEventListener("click", f);
  }
}

function input(e) {
  if (Number.isNaN(parseFloat(output.textContent))) {
    output.textContent = "";
  }

  output.textContent += e.target.textContent;
  equ.textContent += e.target.textContent;
}

function todo(e) {
  if (!Number.isNaN(parseFloat(output.textContent))) {
    problem.push(output.textContent);
  }
  output.textContent = e.target.textContent;
  equ.textContent += e.target.textContent;
  problem.push(e.target.textContent);
}

function clear(e) {
  problem = [];
  output.textContent = "";
  equ.textContent = "";
}

function calc(e) {
  if (!Number.isNaN(parseFloat(output.textContent))) {
    problem.push(output.textContent);
  }

  output.textContent = doCalc(problem);
}

function doCalc(arr) {
  debugger;
  let i;
  let firstNum;
  let secondNum;

  while (arr.includes("(") && arr.includes(")")) {
    let openBr = arr.indexOf("(");
    let closeBr = arr.indexOf(")");
    let inBrackets = arr.slice(openBr + 1, closeBr);
    arr.splice(openBr + 1, inBrackets.length + 1);
    arr[openBr] = doCalc(inBrackets);
  }

  while (arr.includes("*") || arr.includes("/")) {
    if (arr.includes("*") && arr.includes("/")) {
      let indexA = arr.indexOf("*");
      let indexB = arr.indexOf("/");
      i = indexA < indexB ? indexA : indexB;
    } else {
      i = arr.includes("*") ? arr.indexOf("*") : arr.indexOf("/");
    }

    if (arr[i] === "*") {
      firstNum = parseFloat(arr[i - 1]);
      secondNum = parseFloat(arr[i + 1]);
      arr[i - 1] = firstNum * secondNum;
      arr.splice(i, 2);
    }
    if (arr[i] === "/") {
      firstNum = parseFloat(arr[i - 1]);
      secondNum = parseFloat(arr[i + 1]);
      arr[i - 1] = firstNum / secondNum;
      arr.splice(i, 2);
    }
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

  return parseFloat(arr[0].toFixed(2));
}
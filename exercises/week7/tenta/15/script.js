let key = document.querySelector(".key");
let upperCase = document.querySelector(".upperCase");
let input = document.querySelector("input");
input.addEventListener("keyup", onChange);

function onChange() {
  let value = input.value;
  key.textContent = value.charAt(value.length - 1);
  upperCase.textContent = value.toUpperCase();
}
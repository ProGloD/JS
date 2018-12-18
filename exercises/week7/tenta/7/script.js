let input = document.querySelector("#color");
let container = document.querySelector(".container");

input.addEventListener("blur", changeColor);

function changeColor(e) {
  let color = input.value.toLowerCase();
  container.style.backgroundColor = color;
}
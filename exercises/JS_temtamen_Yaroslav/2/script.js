/* Implement your solution here */
let container = document.querySelector(".container");
let buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function(e) {
    container.style.backgroundColor = e.target.textContent.toLowerCase();
  });
}
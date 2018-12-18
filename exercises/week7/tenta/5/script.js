let buttons = document.querySelectorAll("button");
let box = document.querySelector("#box");
let currentMargin = 0;
for (let button of buttons) {
  button.addEventListener("click", onClick);
}

function onClick(e) {
  let button = e.target;
  if (button.id === "right") {
    currentMargin += 10;
    box.style.marginLeft = currentMargin + "px";
  } else if (button.id === "left") {
    currentMargin -= 10;
    box.style.marginLeft = currentMargin + "px";
  }
}
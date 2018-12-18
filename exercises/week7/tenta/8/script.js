document.body.style.margin = 0;
window.addEventListener("resize", buildPage);

let main = document.querySelector("main");
let box = document.querySelector("#box");
box.style.position = "absolute";

buildPage();

function buildPage() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  let boxWidth = width / 2;
  let boxHeight = height / 2;

  main.style.width = width + "px";
  main.style.height = height + "px";

  box.style.width = boxWidth + "px";
  box.style.height = boxHeight + "px";

  box.style.left = (boxWidth / 2) + "px";
  box.style.top = (boxHeight / 2) + "px";
}
let sticky = document.querySelector(".sticky");
let positionTop = sticky.offsetTop;

window.addEventListener("scroll", onScroll);

function onScroll() {
  let scroll = window.pageYOffset;
  if (scroll > positionTop || sticky.offsetTop > positionTop) {
    sticky.style.position = "absolute";
    sticky.style.top = scroll + "px";
  } else if (sticky.offsetTop <= positionTop) {
    sticky.style.position = "static";
  }
}
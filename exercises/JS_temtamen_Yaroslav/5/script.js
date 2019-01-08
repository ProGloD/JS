let ball = document.querySelector(".ball");
ball.style.position = "absolute";
document.querySelector(".outer").addEventListener("mousemove", function(e) {
  let limitX = 200 - 30;
  let limitY = 200 - 30;
  let mouseX = Math.min(e.pageX, limitX);
  let mouseY = Math.min(e.pageY, limitY);
  ball.style.top = mouseY + "px";
  ball.style.left = mouseX + "px";
});
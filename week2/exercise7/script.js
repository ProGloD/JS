//        *** Övning7 ***
var pop_up = document.querySelector(".pop_up");

var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClick);
}

function onClick(e) {
  var button = e.target;
  if (button === document.querySelector(".main_button")) {
    pop_up.classList.remove("hide");
  } else {
    pop_up.classList.add("hide");
  }
}
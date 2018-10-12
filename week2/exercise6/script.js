//        *** Övning6 ***
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onClick);
}

var h1 = document.querySelector("h1");
var current;

function onClick(e) {
  var button = e.target;
  current = document.querySelector(".current");
  current.classList.remove("current");

  switch (button.textContent) {
    case "Tesla":
      h1.textContent = "Nikola Tesla";
      break;
    case "da Vinci":
      h1.textContent = "Leonardo da Vinci";
      break;
    case "Einstein":
      h1.textContent = "Albert Einstein";
      break;
    case "Newton":
      h1.textContent = "Isaac Newton";
      break;
  }

  button.classList.add("current");
}
//        *** Övning5 ***
var button = document.querySelector("button");
button.addEventListener("click", onClick);

var input = document.querySelector("input");
input.addEventListener("input", onClick);

var standartText = button.textContent;

function onClick(e) {
  var element = e.target;
  if (element === button) {
    console.log(element.textContent);
  } else {
    button.textContent = element.value;
    if (button.textContent === "") {
      button.textContent = standartText;
    }
  }
}
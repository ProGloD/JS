//        *** Övning2 ***
var span = document.getElementsByTagName("span");
for (var i = 0; i < span.length; i++) {
  if (span[i].textContent === "Strawberry" || span[i].textContent === "Tomato") {
    span[i].setAttribute("style", "color: red;");
  }
}
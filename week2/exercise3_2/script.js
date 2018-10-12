//        *** Övning3-2 ***
var no_text = document.querySelector("#no-text");
var text = document.createElement("p");
text.textContent = "Hello World";
no_text.appendChild(text);

var remove_me = document.querySelectorAll(".remove-me");
for (var i = 0; i < remove_me.length; i++) {
  remove_me[i].parentElement.removeChild(remove_me[i]);
}
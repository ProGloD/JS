//        *** Övning8 ***
var dropdown = document.querySelector(".dropdown");
var drop_content = document.querySelector(".dropdown-content")
dropdown.addEventListener("click", function(e) {
  console.log("hej");
  drop_content.classList.toggle("show");
});
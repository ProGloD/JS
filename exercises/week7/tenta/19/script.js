let p = document.querySelector("p");

document.querySelector("div").addEventListener("click", function(e) {
  let tag = e.target.tagName.toLowerCase();
  if (tag === "div") {
    p.textContent = "Tryckte på boxen";
  } else if (tag === "button") {
    p.textContent = "Tryckte på knappen";
  }
});
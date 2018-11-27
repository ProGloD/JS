let text = document.querySelector("textarea");
document.querySelector("button").addEventListener("click", function() {
  let parsed;
  try {
    parsed = JSON.parse(text.value);
    alert("Valid JSON string!");
  } catch (e) {
    alert("Invalid JSON string!");
  }
});
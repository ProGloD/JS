let clicks = 0;

document.querySelector("button").addEventListener("click", function() {
  clicks++;
  document.querySelector("p").textContent = clicks;
});
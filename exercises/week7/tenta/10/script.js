let selectors = document.querySelectorAll(".tabs-selector");
for (let selector of selectors) {
  selector.addEventListener("click", selected);
}

hide();

function selected(e) {
  removeSelected();
  hide();
  let selector = e.target;
  selector.classList.add("selected");
  let id = selector.getAttribute("data-tab");
  let tab = document.querySelector("[data-tabid=" + id + "]");
  tab.style.display = "block";
}

function removeSelected() {
  for (let selector of selectors) {
    selector.classList.remove("selected");
  }
}

function hide() {
  let content = document.querySelectorAll(".tabs-single-content");
  for (let tab of content) {
    tab.style.display = "none";
  }
}
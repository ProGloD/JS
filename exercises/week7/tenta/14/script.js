let ps = document.querySelectorAll("p");
for (let p of ps) {
  p.addEventListener("mouseover", show);
  p.addEventListener("mouseout", hide);
}

function show(e) {
  let span = document.createElement("span");
  span.textContent = e.target.getAttribute("data-tooltip");
  e.target.appendChild(span);

  // styling tooltip
  span.style.marginLeft = "10px";
  span.style.padding = "2px";
  span.style.border = "1px solid grey";
  span.style.borderRadius = "10px";
  span.style.boxShadow = "0 0 5px 0 black";
}

function hide(e) {
  e.target.removeChild(e.target.lastChild);
}
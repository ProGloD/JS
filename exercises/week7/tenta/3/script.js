/* Implement your solution here */
let main = document.querySelector("main");
let ol = document.createElement("ol");

main.appendChild(ol);

function renderOrderedList(arr) {
  for (let i of arr) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
  }
}

/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);
document.querySelector("#add").addEventListener("click", add);
let input = document.querySelector("input");
let output = document.querySelector("ul");

function add(e) {
  let newItem = document.createElement("li");
  let del = document.createElement("button");
  del.addEventListener("click", deleteItem);
  del.textContent = "Delete";

  newItem.textContent = input.value;
  newItem.appendChild(del);

  output.appendChild(newItem);
  input.value = "";
}

function deleteItem(e) {
  e.target.parentNode.remove();
}
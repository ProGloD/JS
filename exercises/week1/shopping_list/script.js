document.querySelector("#add").addEventListener("click", add);
let product = document.querySelector("#product");
let amount = document.querySelector("#amount");
let output = document.querySelector("ul");
let products = {};

function add(e) {
  let newItem = document.createElement("li");
  let del = document.createElement("button");
  del.addEventListener("click", deleteItem);
  del.textContent = "Delete";

  if (product in products) {
    products[product] += parseInt(amount.value);
  } else {
    products[product] = parseInt(amount.value);

    newItem.textContent = product.value;
    newItem.appendChild(del);

    output.appendChild(newItem);
  }

  product.value = "";
  amount.value = "";
}

function deleteItem(e) {
  e.target.parentNode.remove();
}
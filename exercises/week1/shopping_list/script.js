document.querySelector("#add").addEventListener("click", add);
let product = document.querySelector("#product");
let amount = document.querySelector("#amount");
let output = document.querySelector("ul");
let products = {};

function add(e) {
  let key = product.value;
  let number = parseInt(amount.value)

  //if exist update value, else create new
  if (key in products) {
    products[key] += number;
  } else {
    products[key] = number;
  }

  // remove all li from ul
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }

  // reprint updated list
  for (let p in products) {
    let newItem = document.createElement("li");
    let del = document.createElement("button");
    del.addEventListener("click", deleteItem);
    del.textContent = "Delete";
    newItem.textContent = p + " " + products[p] + " ";
    newItem.appendChild(del);

    output.appendChild(newItem);
  }


  product.value = "";
  amount.value = "";
}

function deleteItem(e) {
  let arr = e.target.parentNode.firstChild.textContent.split(" ");
  delete products[arr[0]];
  e.target.parentNode.remove();
}
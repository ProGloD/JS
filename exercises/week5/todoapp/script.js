let body = document.querySelector("body");
let input = document.querySelector("input");
let add = document.querySelector("#add");
let ulist = document.querySelector("ul");

add.addEventListener("click", addTodo);

request();

function addTodo() {
  let todo = input.value;
  if (todo) {
    let obj = {
      title: todo
    };
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", request);
    oReq.open("POST", "/todos");
    oReq.setRequestHeader('Content-Type', 'application/json');
    oReq.send(JSON.stringify(obj));
  }
  input.value = "";
}

function request() {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", listener);
  if (window.location.hash) {
    oReq.open("GET", "/todos/" + window.location.hash.slice(1));
  } else {
    oReq.open("GET", "/todos");
  }
  oReq.send();
}

function listener() {
  let dataObj = JSON.parse(this.responseText);
  let value = dataObj.data;
  let dataArr;
  if (Array.isArray(value)) {
    dataArr = value;
  } else {
    dataArr = [value];
  }

  while (ulist.firstChild) {
    ulist.removeChild(ulist.firstChild);
  }

  for (let obj of dataArr) {
    let li = document.createElement("li");
    let output = document.createElement("input");
    let amnt = document.createElement("input");
    let deleteBtn = document.createElement("button");

    output.value = obj.title;
    output.style.border = "none";
    output.setAttribute("name", obj.id);

    amnt.value = obj.amount;
    amnt.setAttribute("type", "number");
    amnt.setAttribute("min", "1");
    amnt.setAttribute("max", "99");
    amnt.style.width = "35px";
    amnt.style.textAlign = "right";
    amnt.style.border = "none";

    deleteBtn.textContent = "X";
    deleteBtn.style.border = "none";
    deleteBtn.style.outline = "none";
    deleteBtn.style.background = "none";
    deleteBtn.onmouseover = function() {
      this.style.color = "red";
    };
    deleteBtn.onmouseout = function() {
      this.style.color = "black";
    };

    output.addEventListener("blur", updateTodo);
    amnt.addEventListener("blur", updateTodo);
    deleteBtn.addEventListener("click", deleteTodo);

    li.appendChild(output);
    li.appendChild(amnt);
    li.appendChild(deleteBtn);
    ulist.appendChild(li);
  }
}

function updateTodo() {
  let parent = this.parentElement;
  let obj = {
    title: parent.children[0].value,
    amount: parseInt(parent.children[1].value)
  };
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", request);
  oReq.open("PUT", "/todos/" + parent.children[0].getAttribute("name"));
  oReq.setRequestHeader('Content-Type', 'application/json');
  oReq.send(JSON.stringify(obj));
}

function deleteTodo() {
  let output = this.parentElement.firstChild;
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", request);
  oReq.open("DELETE", "/todos/" + output.getAttribute("name"));
  oReq.send();
}
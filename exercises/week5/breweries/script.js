let body = document.querySelector("body");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let prev = document.createElement("button");
let next = document.createElement("button");

prev.textContent = "Prev";
next.textContent = "Next";

body.appendChild(table);
body.appendChild(prev);
body.appendChild(next);

table.appendChild(thead);
table.appendChild(tbody);

let db;
let keys = ["name", "street", "city", "state", "postal_code", "country"];
let page = 1;

let trHead = document.createElement("tr");
for (let key of keys) {
  let th = document.createElement("th");
  th.textContent = key.charAt(0).toUpperCase() + key.split("_").join(" ").slice(1);
  trHead.appendChild(th);
}
thead.appendChild(trHead);

// create HTTP request
function request() {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", listener);
  if (window.location.hash) {
    oReq.open("GET", "https://api.openbrewerydb.org/breweries/" + window.location.hash.slice(1));
  } else {
    oReq.open("GET", "https://api.openbrewerydb.org/breweries?page=" + page);
  }
  oReq.send();
}


function listener() {
  let data = JSON.parse(this.responseText);
  if (Array.isArray(data)) {
    db = data;
  } else {
    db = [data];
  }

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  for (let data of db) {
    let trBody = document.createElement("tr");
    for (let key of keys) {
      let td = document.createElement("td");
      td.textContent = data[key];
      trBody.appendChild(td);
    }
    tbody.appendChild(trBody)
  }
}

request();

let buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function(e) {
    if (e.target.textContent === "Prev" && page > 1) {
      page--;
    } else if (e.target.textContent === "Next") {
      page++;
    }
    request();
  });
}
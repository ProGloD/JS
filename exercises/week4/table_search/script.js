let tableData = [{
    name: 'Simba',
    animal: 'Lion'
  },
  {
    name: 'Timon',
    animal: 'Meerkat'
  },
  {
    name: 'Pumba',
    animal: 'Warthog'
  }
];

let tbody = document.querySelector("tbody");
for (let obj of tableData) {
  let tr = document.createElement("tr");
  for (let key in obj) {
    let td = document.createElement("td");
    td.textContent = obj[key];
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

let search = document.querySelector("#search");
search.addEventListener("input", function() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  for (let obj of tableData) {
    let tr = document.createElement("tr");
    if (obj.name.includes(search.value) || obj.animal.includes(search.value)) {
      for (let key in obj) {
        let td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  }
});

document.querySelector("#name").addEventListener("click", function() {
  tableData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  for (let obj of tableData) {
    let tr = document.createElement("tr");
    for (let key in obj) {
      let td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
});

document.querySelector("#animal").addEventListener("click", function() {
  tableData.sort((a, b) => (a.animal > b.animal) ? 1 : ((b.animal > a.animal) ? -1 : 0));

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  for (let obj of tableData) {
    let tr = document.createElement("tr");
    for (let key in obj) {
      let td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
});
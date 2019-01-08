/* Implement your solution here */
function renderTable(arr) {
  let keys = ["name", "occupation", "age"];
  let main = document.querySelector("main");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let headRow = thead.insertRow();

  table.appendChild(thead);
  table.appendChild(tbody);
  main.appendChild(table);

  for (let key of keys) {
    let th = document.createElement("th");
    th.textContent = key;
    th.style.textTransform = "capitalize";
    headRow.appendChild(th);
  }

  for (let obj of arr) {
    let row = tbody.insertRow();
    for (let key of keys) {
      let cell = row.insertCell();
      cell.textContent = obj[key];
    }
  }
}

/* Do not touch anything below this line */
let data = [{
    name: 'Rachel Green',
    occupation: 'Waitress',
    age: 24
  },
  {
    name: 'Monica Geller',
    occupation: 'Chef',
    age: 24
  },
  {
    name: 'Phoebe Buffay',
    occupation: 'Massage therapist',
    age: 27
  },
  {
    name: 'Joey Tribbiani',
    occupation: 'Actor',
    age: 25
  },
  {
    name: 'Chandler Bing',
    occupation: 'Transponster?',
    age: 26
  },
  {
    name: 'Ross Geller',
    occupation: 'Paleontologist',
    age: 26
  },
];
renderTable(data);
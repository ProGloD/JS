/* Implement your solution here */
let main = document.querySelector("main");

function renderPlanets(arr) {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headRow = document.createElement("row");

  let keys = ["name", "mass", "period"];

  table.appendChild(thead);
  thead.appendChild(headRow);
  for (let key of keys) {
    let th = document.createElement("th");
    th.textContent = key;
    th.style.textTransform = "capitalize";
    headRow.appendChild(th);
  }

  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (let planet of arr) {
    let tr = tbody.insertRow();
    for (let key of keys) {
      let td = tr.insertCell();
      td.textContent = planet[key];
    }
  }

  main.appendChild(table);
}

/* Do not touch the code below this line */
renderPlanets([{
    name: 'Mercury',
    mass: 0.06,
    period: 0.24,
    moons: 0
  },
  {
    name: 'Venus',
    mass: 0.82,
    period: 0.62,
    moons: 0
  },
  {
    name: 'Earth',
    mass: 1.0,
    period: 1.0,
    moons: 1
  },
  {
    name: 'Mars',
    mass: 0.11,
    period: 1.88,
    moons: 2
  },
  {
    name: 'Jupiter',
    mass: 317.8,
    period: 11.86,
    moons: 79
  },
  {
    name: 'Saturn',
    mass: 95.2,
    period: 29.46,
    moons: 62
  },
  {
    name: 'Uranus',
    mass: 14.6,
    period: 84.01,
    moons: 27
  },
  {
    name: 'Neptune',
    mass: 17.2,
    period: 164.8,
    moons: 14
  },
]);
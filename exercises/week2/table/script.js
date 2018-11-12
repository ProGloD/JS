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

let name, type;
$("thead").append("<tr><th>Name</th><th>Type</th></tr>");
for (let e of tableData) {
  let tr = $("<tr>");
  for (let key in e) {
    let td = $("<td>");
    td.text(e[key]);
    tr.append(td);
  }
  $("tbody").append(tr);
}
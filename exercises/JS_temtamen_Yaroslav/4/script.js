/* Implement your solution here */
getData().then(function(result) {
  let main = document.querySelector("main");
  let ul = document.createElement("ul");
  main.appendChild(ul);

  let data = JSON.parse(result).data;
  for (let obj of data) {
    let li = document.createElement("li");
    li.textContent = obj.name;
    ul.appendChild(li);
  }
});

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({
      data: [{
          name: 'Knatte'
        },
        {
          name: 'Fnatte'
        },
        {
          name: 'Tjatte'
        },
      ],
    }));
  });
}
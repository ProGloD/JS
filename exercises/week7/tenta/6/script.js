/* Implement your solution here */
getData().then(function(result) {
  let container = document.querySelector(".container");
  let ol = document.createElement("ol");
  let data = JSON.parse(result).data;
  for (let country of data) {
    let li = document.createElement("li");
    li.textContent = country;
    ol.appendChild(li);
  }

  container.appendChild(ol);
});

/* Do not touch anything below this line */
function getData() {
  return new Promise(function(resolve, reject) {
    let t = Math.random() * 2000 + 1000;
    setTimeout(function() {
      resolve(JSON.stringify({
        data: [
          'Sweden',
          'Denmark',
          'Norway',
          'Finland'
        ]
      }));
    }, t);
  });
}
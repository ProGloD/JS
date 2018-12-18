let body = document.body;
let header = document.createElement("h1");

body.appendChild(header);

setUp();

function setUp() {
  header.textContent = "Make some setting for your Quiz!";
}
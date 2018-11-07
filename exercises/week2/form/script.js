document.querySelector('form').addEventListener("submit", validate);
let name = document.querySelector('input[name="name"]');
let age = document.querySelector('input[name="age"]');
let username = document.querySelector('input[name="username"]');
let password = document.querySelector('input[name="password"]');
let passwordrepeat = document.querySelector('input[name="passwordrepeat"]');

function validate(e) {
  let nameV = name.value;
  let ageV = parseInt(age.value);
  let usernameV = username.value;
  let passwordV = password.value;
  let passwordrepeatV = passwordrepeat.value;

  if (!nameV || !isNaN(parseInt(nameV))) {
    alert("Check your name!");
    e.preventDefault();
  } else if (Number.isNaN(ageV) || ageV < 5 || ageV > 80) {
    alert("Age must to be a number between 5-80");
    e.preventDefault();
  } else if (!usernameV || usernameV.length < 3) {
    alert("Username have to be at least 3 symbols");
    e.preventDefault();
  } else if (passwordV.length < 6 || passwordV !== passwordrepeatV) {
    alert("Check password");
    e.preventDefault();
  } else {
    alert("Account was created!");
  }
}
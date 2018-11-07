function logAge(obj) {
  let age = "age";
  if (age in obj) {
    console.log(obj[age]);
  } else {
    console.log("Age is undefined!");
  }
}

let object = {
  name: "Smith",
  age: 54
}
logAge(object) // -> 54
function fromSnakeToCamel(str) {
  let arr = str.split("_");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  console.log(arr.join(""));
}

function fromCamelToSnake(str) {
  console.log(str.split(/(?=[A-Z])/).join('_').toLowerCase());
}

fromSnakeToCamel('hello_world'); // -> "helloWorld"
fromCamelToSnake('helloWorld'); // -> 'hello_world'
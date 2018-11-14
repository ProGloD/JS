function toCamelCase(str) {
  let arr = str.split(" ");
  arr[0] = arr[0].toLowerCase();

  console.log(arr.join(""));
}

toCamelCase("Hello World"); // -> "helloWorld"
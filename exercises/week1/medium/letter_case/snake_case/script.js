function toSnakeCase(str) {
  console.log(str.toLowerCase().split(" ").join("_"));
}

toSnakeCase("Hello World"); // -> "hello_world"
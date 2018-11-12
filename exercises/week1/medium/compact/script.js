function compact(arr) {
  return arr.filter(Boolean);
}
console.log(compact([0, 5, "", false, true, "hello"])); // -> [5, true, "hello"]
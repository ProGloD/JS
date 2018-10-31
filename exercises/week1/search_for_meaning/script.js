function searchForMeaning(arr) {
  for (let i of arr) {
    if (i === 42) {
      return "Meaning found at " + arr.indexOf(i);
    }
  }
  return "Not found";
}

/*
// One row solution
function searchForMeaning(arr){
  return arr.includes(42) ? "Meaning found at " + arr.indexOf(42) : "Not found";
}
*/
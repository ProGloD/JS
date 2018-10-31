function searchForMeaning(arr) {
  for (let i of arr) {
    if (i === 42) {
      return "Meaning found at " + arr.indexOf(i);
    }
  }
  return "Not found";
}
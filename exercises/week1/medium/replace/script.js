function replace(str, keyword, replaceWith) {
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === keyword) {
      arr[i] = replaceWith;
    }
  }

  return arr.join("");
}
console.log(replace("JavaScript", "a", "c"));
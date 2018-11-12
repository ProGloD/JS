//        *** hamming ***
function hamming(str1, str2) {
  var arr1 = str1.split("");
  var arr2 = str2.split("");
  var ham = 0;
  if (str1.length === str2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i].toLowerCase() !== arr2[i].toLowerCase()) {
        ham++;
      }
    }
  } else {
    return "inte samma längt";
  }
  return ham;
}
console.log(hamming("Hello", "Hulla"));
function longestWord(sentence) {
  var result = "";
  var arr = sentence.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (result.length < word.length) {
      result = word;
    }
  }

  return result;
}
console.log(longestWord("I love JavaScript")); // -> JavaScripts
function wordCount(str) {
  let words = {};
  let arr = str.split(" ");
  for (let word of arr) {
    if (word in words) {
      words[word]++;
    } else {
      words[word] = 1;
    }
  }
  return words;
}
console.log(wordCount("Banana Carrot Banana"));
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

  let key;
  let max = 0;
  for (let word in words) {
    if (words[word] > max) {
      max = words[word];
      key = word;
    }
  }

  return key;
}
console.log(wordCount("Banana Carrot Banana"));
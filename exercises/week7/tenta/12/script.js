/* Implement your solution here */
function mostCommonWord(str) {
  let words = {};
  let arr = str.split(" ");
  for (let word of arr) {
    if (word in words) {
      words[word]++;
    } else {
      words[word] = 1;
    }
  }

  let value = 0;
  let word = "";
  for (let key in words) {
    if (words[key] > value) {
      value = words[key];
      word = key;
    }
  }
  return word;
}

/* Do not touch anything below this line */
if (mostCommonWord('Hello this is a text that is cool and stuff') !== 'is') console.error('Invalid solution');
else console.log('Solved!');
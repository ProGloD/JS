/* Implement your solution here */
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

/* Do not touch the code below this line, but make sure the examples work */
if (longestWord("I am a computer and I like to calculate stuff") !== "calculate") console.error('Invalid solution');
else console.log('Solved!');
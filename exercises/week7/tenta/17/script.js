/* Implement your solution here */
function countWord(text, find) {
  let count = 0;
  let words = text.split(".").join("").split(" ");
  for (let word of words) {
    if (word.toLowerCase() === find.toLowerCase()) {
      count++;
    }
  }

  return count;
}

/* Do not touch anything below this line */

let text = 'Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.'

if (countWord(text, 'HTML') === 1 && countWord(text, 'JavaScript') === 3 && countWord(text, 'web') === 4) console.log('Solved!')
else console.error('Invalid solution');
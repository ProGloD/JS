/* Implement your solution here */
function rollDice(size) {
  if (!size) {
    return Math.round(Math.random() * 6);
  } else {
    return Math.round(Math.random() * size);
  }
}

console.log(rollDice());
/*
 * There is a bug in this code. Fix it!
 * You're allowed to change code here, but don't just remove everything and start from scratch.
 * Make sure you understand why the bug occurs (there may be more than one).
 * Expected result should be:
 * Mean: 5.5
 * Median: 3.5
 * Mode: 4
 */
let array = [1, 4, 4, 3, 3, 19, 3, 2];
console.log("Mean: " + mean(array));
console.log("Median: " + median(array));
console.log("Mode: " + mode(array));

function getSum(arr) {
  debugger;
  let sum = 0;

  for (let el of arr) {
    sum += el;
  }
  return sum;
}

function mean(arr) {
  let sum = getSum(arr);
  return sum / arr.length;
}

function median(arr) {
  debugger;
  arr.sort(function(a, b) {
    return a - b
  });
  var half = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    // Even, we'll get the two numbers in the middle and average them
    return getSum(arr.slice(half - 1, half + 1)) / 2;
  } else {
    // Odd, we'll return the number in the middle
    return arr[half];
  }
}

function mode(arr) {
  let countObj = {};
  for (let x of arr) {
    if (x in countObj === false) countObj[x] = 0;
    countObj[x]++;
  }

  let maxCount = 0;
  let maxNumber;
  for (let x in countObj) {
    let count = countObj[x];
    if (count > maxCount) {
      maxCount = count;
      maxNumber = x;
    }
  }
  return parseInt(maxNumber);
}
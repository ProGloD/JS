/*
let arr = [];
for (let month = 7; month <= 08; month++) {
  for (let day = 1; day <= 31; day++) {
    if (day < 10) {
      arr.push("2018-0" + month + "-0" + day);
    }
    arr.push("2018-0" + month + "-" + day);
  }
}

console.log(arr);
*/

//let arr = [];

let start = document.querySelector("#startDate");
let end = document.querySelector("#endDate");
let output = document.querySelector("#output");
let button = document.querySelector("button").addEventListener("click", getDateRange);

// main function, returerar lista med alla dagar mellan angivna start och
// slut datum i format "YYYY-MM-DD"
function getDateRange() {
  let startDate = start.value.split("-").map(Number);
  let endDate = end.value.split("-").map(Number);
  let currentDate = start.value;
  let currentMonth = startDate[1]
  let currentDay = startDate[2];

  for (let year = startDate[0]; year <= endDate[0]; year++) {
    while (currentMonth <= 12) {
      while (currentDay <= howManyDays(year, currentMonth)) {

        let day = year + "-" + lessThanTen(currentMonth) + "-" + lessThanTen(currentDay);
        //arr.push(year + "-" + lessThanTen(currentMonth) + "-" + lessThanTen(currentDay));

        let p = document.createElement("p");
        p.textContent = day;
        output.appendChild(p);

        currentDate = day;
        //currentDate = arr[arr.length - 1];
        if (currentDate === end.value) {
          break;
        }

        currentDay++;
      }

      if (currentDate === end.value) {
        break;
      }
      currentDay = 1;
      currentMonth++;
    }

    if (currentDate === end.value) {
      break;
    }
    currentMonth = 1;
  }
  //console.log(arr);
  //arr = [];
}

// om mindre än 10, lägg till en "0" framför
function lessThanTen(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

// returerar antal dagar i månaden
function howManyDays(year, month) {
  // April, Juni, September, November
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }
  // Februari
  else if (month === 2) {
    // om skottår returera 29, annars 28
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      return 29;
    } else {
      return 28
    }
  }
  // Januari, Mars, May, Juli, Augusti, Oktober, December
  else {
    return 31;
  }
}
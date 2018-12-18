/* Implement your solution here */
function getTodayDate() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date();

  let day = days[date.getDay()];
  let num = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  return day + " " + num + " " + month + " " + year;
}

console.log(getTodayDate());
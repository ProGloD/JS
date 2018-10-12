/*
//        *** Övning3-1 ***
var appleP = document.createElement("p");
appleP.textContent = "Apple";
document.body.appendChild(appleP);
var pearP = document.createElement("p");
pearP.textContent = "Pear";
document.body.appendChild(pearP);
var bananaP = document.createElement("p");
bananaP.textContent = "Banana";
document.body.appendChild(bananaP);
*/

//        *** Övning3-1 *** With for-loop
var fruits = ["Apple", "Pear", "Banana"]
for (var i = 0; i < fruits.length; i++) {
  var p = document.createElement("p");
  p.textContent = fruits[i];
  document.body.appendChild(p);
}
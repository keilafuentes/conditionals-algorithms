//Read a whole number and determine if it has 3 digits.

let number = prompt("Enter a number", "Type a number here").toString();

if (number.length == 3) {
  alert("This number has 3 digits");
} else {
  alert("This number doesn't have 3 digits");
}

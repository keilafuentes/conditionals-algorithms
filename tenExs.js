//Read a whole number and determine if it is a number ending in 4.

let number = prompt("Enter a number", "Type a number here");

if (number == 4) {
  alert("This number is 4");
} else {
  alert("This number is not 4");
}

//Read a whole number and determine if it has 3 digits.

let number = prompt("Enter a number", "Type a number here").toString();

if (number.length == 3) {
  alert("This number has 3 digits");
} else {
  alert("This number doesn't have 3 digits");
}

//Read an integer and determine if it is negative.

let number = prompt("Enter a number", "Type a number here");

if (number < 0) {
  alert("This number IS negative");
} else {
  alert("This number IS NOT negative");
}

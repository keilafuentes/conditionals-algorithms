///GENERAL METHODS
function getFirstDigit(num) {
  return Number(String(num)[0]);
}

function getLastDigit(num) {}
//////////////

//3
function negative(number) {
  return number < 0;
}

//1
function endFour(number) {}

function endSeven(number) {}

//31
function isTen(number) {
  return number == 10;
}

//2
function threeDigits(number) {
  digits = number.toString();
  return digits.length == 3;
}

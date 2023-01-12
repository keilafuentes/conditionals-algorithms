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
  digits = number.toString().length;
  return digits == 3;
}

//32
function multipleSeven(number) {
  result = number % 7;
  return result == 0;
}

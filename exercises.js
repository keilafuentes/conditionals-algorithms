//3
function negative(number) {
  return number < 0;
}

//1
function endFour(number) {
  return getLastDigit(number) == 4;
}

function getLastDigit(num) {
  return num.toString().slice(-1);
}

function endSeven(number) {
  return getLastDigit(number) == 7;
}

function getFirstDigit(num) {}

//31
function isTen(number) {
  return number == 10;
}

//2
function threeDigits(number) {
  digits = number.toString();
  return digits.length == 3;
}

console.log();

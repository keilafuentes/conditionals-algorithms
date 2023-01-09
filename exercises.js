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

function getFirstDigit(number) {}

//31
function isTen(number) {
  return number == 10;
}

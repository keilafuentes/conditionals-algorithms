//3
function negative(number) {
  return number < 0;
}

//1
function endFour(number) {
  lastDigit = getLastDigit(number);
  return lastDigit == 4;
}

function getLastDigit(num) {
  return num.toString().slice(-1);
}

function getFirstDigit(number) {}

//31
function isTen(number) {
  return number == 10;
}

console.log();

///GENERAL METHODS
function getFirstDigit(num) {
  return Number(String(num)[0]);
}

function getTotalDigits(num) {
  digits = num.toString().length;
  return digits;
}

function getLastDigit(num) {
  return num % 10;
}
//////////////

//3
function negative(number) {
  return number < 0;
}

//1
function endFour(number) {
  digit = getLastDigit(number);
  return digit == 4;
}

//33
function endSeven(number) {
  lastNumber = getLastDigit(number);
  return lastNumber == 7;
}

//31
function isTen(number) {
  return number == 10;
}

//2
function threeDigits(number) {
  return getTotalDigits(number) == 3;
}

//32
function multipleSeven(number) {
  result = number % 7;
  return result == 0;
}

//34
function lessThousand(number) {
  if (number < 1000) {
    console.log("El número ingresado es menor que mil.");
  } else {
    total = getTotalDigits(number);
    console.log("La cantidad de digitos es: " + total);
  }
}

//4
function sumTwoDigits(number) {
  first = getFirstDigit(number);
  second = getLastDigit(number);
  result = first + second;
  return "La suma de ambos digitos es: " + result;
}

//5
function digitsEven(number) {
  first = getFirstDigit(number);
  second = getLastDigit(number);
  if (first % 2 == 0 && second % 2 == 0) {
    console.log("Ambos digitos son pares");
  } else {
    console.log("Ambos digitos no son pares");
  }
}

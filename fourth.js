//Read a two-digit whole number and determine what the sum of its digits is equal to.

let number = prompt("Enter a number", "Type a number here").toString;

let result = number[0];

alert(result);
const firstDigitStr = String(num)[0];
console.log(firstDigitStr); // 👉️ 1
console.log(typeof firstDigitStr); // 👉️ string

const firstDigitNum = Number(firstDigitStr);
console.log(firstDigitNum); // 👉️ 1
console.log(typeof firstDigitNum); // 👉️ number

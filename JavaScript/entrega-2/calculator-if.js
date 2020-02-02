//---
// Calculator (with if)

let firstNumber = +prompt('Insert first number:');
let secondNumber = +prompt('Insert second number:');
let operation = prompt('Insert operation: +, -, *, /, **');

if (operation === '+') {
  console.log(firstNumber + secondNumber);
} else if (operation === '-') {
  console.log(firstNumber - secondNumber);
} else if (operation === '*') {
  console.log(firstNumber * secondNumber);
} else if (operation === '/') {
  console.log(firstNumber / secondNumber);
} else if (operation === '**') {
  console.log(firstNumber ** secondNumber);
} else {
  console.log('Operation not valid');
}

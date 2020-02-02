//---
// Calculator (with switch)

let firstNumber = +prompt('Insert first number:');
let secondNumber = +prompt('Insert second number:');
let operation = prompt('Insert operation: +, -, *, /, **');

switch (operation) {
  case '+':
    console.log(firstNumber + secondNumber);
    break;

  case '-':
    console.log(firstNumber - secondNumber);
    break;

  case '*':
    console.log(firstNumber * secondNumber);
    break;

  case '/':
    console.log(firstNumber / secondNumber);
    break;

  case '**':
    console.log(firstNumber ** secondNumber);
    break;

  default:
    console.log('Operation not valid');
    break;
}

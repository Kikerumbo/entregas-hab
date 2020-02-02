//---
//Crea un programa que simule el comportamiento de un dado. El programa debe ir almacenando los valores de cada tirada en una variable, y cuando llegue a 50 puntos o más, debe finalizar su ejecución mostrando un mensaje tal que:

let diceRollTry = 0;
let diceRoll;
let total = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

while (total < 50) {
  prompt('Press a key to roll the dice');
  diceRoll = getRandomInt(1, 6);

  total += diceRoll;

  diceRollTry++;
  console.log('Roll number ', diceRollTry, ': ', 'the number was ', diceRoll, ' - Total points: ', total);
}

console.log('Congrats! You got a: ', diceRoll, '. You won the game with a total of: ', total);

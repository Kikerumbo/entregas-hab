'use strict';

/*
###########################
#### E N T R E G A - 3 ####
###########################
 */

/*
###################
### EJERCICIO 1 ###
###################

Dada la función LetterCount(str) toma el parámetro str que se está pasando y devuelve la primera palabra de mayor longitud. 
Por ejemplo: 'Hoy es un día estupendo y fantástico.', debe devolver fantástico porque es la primera palabra que más letras tiene.

*/

const countLetters = 'Hoy es un día estupendo, supercalifragilístico y fantástico.';

function letterCount(str) {
  const splitStr = str.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ').split(' ');
  let longestWord = '';

  for (const value of splitStr) {
    if (value.length > longestWord.length) {
      longestWord = value;
    }
  }
  return longestWord;
}

console.log(letterCount(countLetters));

/*
###################
### EJERCICIO 2 ###
###################

Haz que la función BinaryConverter(str) devuelva la forma decimal del valor binario.
Por ejemplo: si se pasa 101 el programa debe retornar un 5, si se pasa 1000 debe retornar un 8, etc.

*/

// const binaryStr = '1000';

// function binaryConverter(str) {
//   const decimalNumber = parseInt(str, 2);
//   console.log(decimalNumber);
// }

// binaryConverter(binaryStr);

/*
###################
### EJERCICIO 3 ###
###################

Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa y devuelva true si el parámetro es un palíndromo, (la cadena se lee igual
hacia adelante que hacia atrás) de lo contrario devuelve false.
Por ejemplo: "Arriba la birra" debería devolver true, se lee igual del derecho que del revés.

*/

/* const palindromeStr = 'Arriba la birra.';

function palindromeTwo(str) {
  const simplifiedStr = str
    .toLowerCase()
    .replace(/[\W_]/g, '')
    .split('');

  for (let character of simplifiedStr) {
    if (character !== simplifiedStr.pop()) {
      return false;
    }
  }
  return true;
}

console.log(palindromeTwo(palindromeStr)); */

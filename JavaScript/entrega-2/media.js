//---
//Calcula la media de puntos en los últimos tres partidos de estos tres equipos y muestra por consola el que tenga una media más alta
// Equipo María: 62, 34, 55.
// Equipo Paula: 35, 60, 59.
// Equipo Rebeca: 40, 39, 63.

let maria = [62, 34, 55];
let paula = [35, 60, 59];
let rebeca = [40, 39, 63];

function calMedia(a, b, c) {
  let resultA = (a[0] + a[1] + a[2]) / 3;
  let resultB = (b[0] + b[1] + b[2]) / 3;
  let resultC = (c[0] + c[1] + c[2]) / 3;

  console.log(resultA, resultB, resultC);

  if (resultA > resultB && resultA > resultC) {
    console.log('Team Rebeca:', resultA);
  }

  if (resultB > resultA && resultB > resultC) {
    console.log('Team Rebeca:', resultB);
  }

  if (resultC > resultA && resultC > resultB) {
    console.log('Team Rebeca:', resultC);
  }
}

calMedia(maria, paula, rebeca);

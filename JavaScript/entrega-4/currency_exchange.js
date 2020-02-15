//#####################
//#### ENTERGA - 4 ####
//#####################

// Accede con fetch a la información de la siguiente API: https://api.exchangerate-api.com/v4/latest/EUR. Dado un valor en euros (EUR), convierte dicha
// cantidad a dólares (USD). Por último convierte esta cantidad en dólares a yenes (JPY).

'use strict';

const exchangeUrl = 'https://api.exchangerate-api.com/v4/latest/EUR';

// With this function we'll get the exchange rate of the Euro vs Dollar and the Dollar vs YEN.
// With "async" and "await", this function will wait in parallel to the main process, until it's resolved.
async function getExchangeRates() {
  let exchangeRatesArray = [];

  const euroToDollarExchangeRatePetition = await fetch(exchangeUrl);
  exchangeRatesArray[0] = await euroToDollarExchangeRatePetition.json();
  exchangeRatesArray[0] = exchangeRatesArray[0].rates.USD;

  const dollarToYenExchangeRatePetition = await fetch(exchangeUrl);
  exchangeRatesArray[1] = await dollarToYenExchangeRatePetition.json();
  exchangeRatesArray[1] = exchangeRatesArray[1].rates.JPY;

  return exchangeRatesArray;
}

// With this function, we calculate the exchange for a given amount of Euros.
async function convertEuroToDollars(amountOfEuros) {
  const exchangeRates = await getExchangeRates();

  const [euroToDollarExchangeRate, dollarToYenRateExchange] = exchangeRates;

  const euroToDollar = (euroToDollarExchangeRate * 100) / 100;
  console.log(`${amountOfEuros} € are ${euroToDollarExchangeRate} $`);

  const dollarToYen = (dollarToYenRateExchange * 100) / 100;
  console.log(`${euroToDollar} $ are ${dollarToYenRateExchange} YEN`);
}

convertEuroToDollars(10);

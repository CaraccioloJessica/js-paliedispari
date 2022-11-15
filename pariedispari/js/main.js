// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.

// PROMPT DI SCELTA INIZIALI
const scelta = prompt("Scegli pari o dispari");
const numUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

// SOMMARE I DUE NUMERI

// OUTPUT VINCITORE

// GENERARE NUMERO RANDOM PC DA 1 A 5  (CON FUNZIONE)
function numRandom(min, max) {
  min = 1;
  max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// STABILIRE SE SOMMA E' PARI O DISPARI (CON FUNZIONE)



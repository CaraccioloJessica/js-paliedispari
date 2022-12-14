// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.

// PROMPT DI SCELTA INIZIALI
const scelta = prompt("Scegli pari o dispari");
const numUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log('Hai scelto', scelta);
console.log('Il tuo numero è', numUtente);

// SOMMARE I DUE NUMERI (USER + RANDOM PC)
const numeroPc = numRandom();
console.log('Il numero del pc è', numeroPc);

// SOMMA
let sommaNumeri = numUtente + numeroPc;
console.log('La somma dei due numeri è', sommaNumeri);

// VERIFICA SOMMA PARI O DISPARI
let risultatoFinale = pariDispari(sommaNumeri);

// OUTPUT VINTO
if (scelta === "pari" && risultatoFinale === true){
  console.log("Complimenti, hai vinto!");
} 
else if (scelta === "dispari" && risultatoFinale === false){
  console.log("Complimenti, hai vinto!")
}
// OUTPUT PERSO
 else {
  console.log("Mi dispiace, hai perso");
}

// FUNZIONI-------------------------------------------------------
// GENERARE NUMERO RANDOM PC DA 1 A 5 (CON FUNZIONE)
function numRandom(min, max) {
  min = 1;
  max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// STABILIRE SE PARI O DISPARI (CON FUNZIONE)
function pariDispari(somma) {
  if (somma % 2 === 0) {
    console.log("il risultato è pari");
    return true;
  } else {
    console.log("il risultato è dispari");
    return false;
  }
}



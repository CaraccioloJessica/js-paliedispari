// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.Dare output relativo.


// CHIEDERE PAROLA AD UTENTE
const parolaInserita = prompt('Inserisci una parola');

// console.log("La tua parola è:" + " " + parolaInserita);

// CONDIZIONE PER CONFRONTARE SE PAROLA INIZIALE CON PAROLA INVERTITA COMBACIANO
const parolaUtenteInversa = invertiParola(parolaInserita);

if(parolaInserita === parolaUtenteInversa){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

// FUNZIONE DI VERIFICA SE LA PAROLA E' PALINDROMA
function invertiParola(palindroma) {
  // DIVIDIAMO LA PAROLA, LA INVERTIAMO E LA RIUNIAMO
  const parolaInvertita = palindroma.split('').reverse().join('');
  return parolaInvertita;
}


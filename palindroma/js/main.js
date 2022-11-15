// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.Dare output relativo.


// CHIEDERE PAROLA AD UTENTE
const parolaUtente = prompt('Inserisci una parola');

// console.log("La tua parola è:" + " " + parolaUtente);



// FUNZIONE DI VERIFICA SE LA PAROLA E' PALINDROMA
function inverti(palindroma) {
  // DIVIDIAMO LA PAROLA, LA INVERTIAMO E LA RIUNIAMO
  const parolaInversa = palindroma.split('').reverse().join('');
  return parolaInversa;
}


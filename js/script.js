
//chiedo all'utente il suo nome e la data di nascita e restituisco la sua età

const annoAttuale = 2022;
const nomeUtente = prompt("Come ti chiami?");

// 1 salvo in una const la data inserita dall'utente con un prompt
const dataNascita = prompt("In che anno sei natə?");
console.log(dataNascita);

// 2 in una variabile faccio la sotrazione dell'anno attuale con la data di nascita
const anniUtente = annoAttuale - dataNascita

//3 stampo in pagina
document.getElementById("risultato").innerHTML = `
  Ciao <strong>${nomeUtente}</strong>, <br>
  tu hai ${anniUtente} anni!
  `;
// @qui Ciao ragazze e ciao ragazzi!
// Esercizio di oggi: Campo Minato
// nome repo: js-campominato-dom
// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS (da implementare solo ed esclusivamente se la prima parte funziona in tutto e per tutto):
//  Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


function randomNumberComputer (minNumb,maxNumb,levelSelected){


  let randomGenerator = Math.floor(Math.random() * 16 + 1);
  let bombList = [];

  while(bombList.includes){

  }



}



let generateButton = document.querySelector('.play-button');
let generateBoxCell = document.querySelector('.cell-container');
let levelDifficult = document.querySelector("#select-level");

generateButton.addEventListener('click', function() {
  generateBoxCell.innerHTML = '';

  if (levelDifficult.value === "difficoltà 1") {
    for (let i = 1; i <= 100; i++) {
      let singleCell = createElement('div', 'cell-1');
      singleCell.classList.toggle('cell-box');
      singleCell.innerHTML = i;

      singleCell.addEventListener('click', function() {
        singleCell.classList.toggle('selected-cell');
        console.log("You selected: ", singleCell.innerHTML);
      });

      generateBoxCell.appendChild(singleCell);
    }
  } else if (levelDifficult.value === "difficoltà 2") {
    for (let i = 1; i <= 81; i++) {
      let singleCell = createElement('div', 'cell-2');
      singleCell.classList.toggle('cell-box');
      singleCell.innerHTML = i;

      singleCell.addEventListener('click', function() {
      singleCell.classList.toggle('selected-cell');
      console.log("You selected: ", singleCell.innerHTML);
      });

      generateBoxCell.appendChild(singleCell);
    }
  } else if (levelDifficult.value === "difficoltà 3") {
    for (let i = 1; i <= 49; i++) {
      let singleCell = createElement('div', 'cell-3');
      singleCell.classList.toggle('cell-box');
      singleCell.innerHTML = i;

      singleCell.addEventListener('click', function() {
        singleCell.classList.toggle('selected-cell');
        console.log("You selected: ", singleCell.innerHTML);
      });

      generateBoxCell.appendChild(singleCell);
    }
  }
});

function createElement(tagName, className) {
  const cellElement = document.createElement(tagName);
  cellElement.className = className;
  return cellElement;
}

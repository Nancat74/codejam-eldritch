
//import cardsDataBlue from "./data/mythicCards/blue/index.js";
//import cardsDataBrown from "./data/mythicCards/brown/index.js";
//import cardsDataGreen from "./data/mythicCards/green/index.js";

//import ancientsData from "./data/ancients.js";

const deckBack = document.querySelector('.deck');
const gameCardItem = document.querySelector('.last-card');
const dots = document.querySelectorAll('.dot');

let ancientItem = 0;
let difficult = 1;

let greenArray = [];
let brownArray = [];
let bluArray = [];

console.log(dots);

function getAncients(){

    const ancients = document.querySelector('.ancients-container');

    ancients.onclick = function(e){
        const r =[...ancients.childNodes].map(el=> {if(el.classList !== undefined && el.classList.contains('active')) el.classList.remove('active')})
        e.target.classList.add('active');
    }
}

getAncients();


function getDifficulties(){

    const difficulties = document.querySelector('.difficulty-container');

    difficulties.onclick = function(e){
        const m =[...difficulties.childNodes].map(el=> {if(el.classList !== undefined && el.classList.contains('active')) el.classList.remove('active')})
        e.target.classList.add('active');
    }
}

getDifficulties();


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}  


  function getRandomNum() {
    return Math.floor(Math.random() * (3 - 0));
  }

  deckBack.addEventListener('click', () => {
    if (stage === 2 && summStageMatrix === 0) {
        gameCardItem.style.backgroundImage = "";
      } else {
        let random = getRandomNum();
    
        if (summStageMatrix === 0) {
          stage += 1;
        }
    }
});
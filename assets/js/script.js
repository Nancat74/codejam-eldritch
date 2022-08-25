
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

  function sortArray(ancient, difficult) {
    let greenArrayEasy = [];
    let greenArrayNormal = [];
    let greenArrayHard = [];
    let brownArrayEasy = [];
    let brownArrayNormal = [];
    let brownArrayHard = [];
    let bluArrayEasy = [];
    let bluArrayNormal = [];
    let bluArrayHard = [];
  
    let greenCards =
      ancientsData[ancient].firstStage.greenCards +
      ancientsData[ancient].secondStage.greenCards +
      ancientsData[ancient].thirdStage.greenCards;
  
    let blueCards =
      ancientsData[ancient].firstStage.blueCards +
      ancientsData[ancient].secondStage.blueCards +
      ancientsData[ancient].thirdStage.blueCards;
  
    let brownCards =
      ancientsData[ancient].firstStage.brownCards +
      ancientsData[ancient].secondStage.brownCards +
      ancientsData[ancient].thirdStage.brownCards;
  
    addArrayWithDifficult(cardsDataGreen, greenArrayEasy, "easy");
    addArrayWithDifficult(cardsDataGreen, greenArrayNormal, "normal");
    addArrayWithDifficult(cardsDataGreen, greenArrayHard, "hard");
  
    addArrayWithDifficult(cardsDataBlue, bluArrayEasy, "easy");
    addArrayWithDifficult(cardsDataBlue, bluArrayNormal, "normal");
    addArrayWithDifficult(cardsDataBlue, bluArrayHard, "hard");
  
    addArrayWithDifficult(cardsDataBrown, brownArrayEasy, "easy");
    addArrayWithDifficult(cardsDataBrown, brownArrayNormal, "normal");
    addArrayWithDifficult(cardsDataBrown, brownArrayHard, "hard");
  
    if (difficult === 1) {
      greenArray = [...greenArrayEasy, ...greenArrayNormal];
      brownArray = [...brownArrayEasy, ...brownArrayNormal];
      bluArray = [...bluArrayEasy, ...bluArrayNormal];
    }
    if (difficult === 2) {
      greenArray = [...greenArrayEasy, ...greenArrayNormal];
      brownArray = [...brownArrayEasy, ...brownArrayNormal];
      bluArray = [...bluArrayEasy, ...bluArrayNormal];
    }
    if (difficult === 3) {
      greenArray = [...greenArrayEasy, ...greenArrayNormal, ...greenArrayHard];
      brownArray = [...brownArrayEasy, ...brownArrayNormal, ...brownArrayHard];
      bluArray = [...bluArrayEasy, ...bluArrayNormal, ...bluArrayHard];
  
      shuffle(greenArray);
      shuffle(brownArray);
      shuffle(bluArray);
    }
    if (difficult === 4) {
      greenArray = [...greenArrayNormal, ...greenArrayHard];
      brownArray = [...brownArrayNormal, ...brownArrayHard];
      bluArray = [...bluArrayNormal, ...bluArrayHard];
    }
    if (difficult === 5) {
      greenArray = [...greenArrayHard, ...greenArrayNormal];
      brownArray = [...brownArrayHard, ...brownArrayNormal];
      bluArray = [...bluArrayHard, ...bluArrayNormal];
    }
  
    lengthСheckArray(greenCards, greenArray);
    lengthСheckArray(brownCards, brownArray);
    lengthСheckArray(blueCards, bluArray);
  }


  function addArrayWithDifficult(data, array, difficult) {
    data.forEach((element) => {
      if (element.difficulty === difficult) {
        array.push(element.cardFace);
      }
    });
    shuffle(array);
  }

  function lengthСheckArray(cards, array) {
    if (array.length > cards) {
      while (array.length > cards) {
        array.pop();
      }
      return shuffle(array);
    }
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
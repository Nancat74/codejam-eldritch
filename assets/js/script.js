import difficulties from '../../data/difficulties.js';
import ancients from '../../data/ancients.js';

//const ancientsContainer = document.querySelector('.ancients-container');
//const difficultyContainer = document.querySelector('.difficulty-container');
const deckContainer = document.querySelector('.deck-container');
const difficulty = document.querySelectorAll('.difficulty');
//const ancient = document.querySelectorAll('.ancient-card');

//console.log(ancient);
//console.log(difficulties);
//console.log(ancients);

function getAncients(){

    const ancients = document.querySelector('.ancients-container');

    ancients.onclick = function(e){
        const r =[...ancients.childNodes].map(el=> {if(el.classList !== undefined && el.classList.contains('active')) el.classList.remove('active')})
        e.target.classList.add('active');
    }
}

getAncients();


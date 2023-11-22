// import {jsonData} from './svenska-ord.json'


// Math.Random () för att slumpa fram ord från listan! 
// input fältet för :: inputName    //console.log för att skriva ut namnet i consolen
// Använd localStorage för att spara datan i webbläsaren.
// Listan ska vara sorterad så att de bästa omgångarna visas överst: i första hand stigande på antal gissningar, i andra hand fallande på datum och tid för omgången. Man ska kunna växla till att visa omgångarna sorterade i fallande ordning på datum och tid.
//  JSON methods, stringify och parse.
// Använd Date-funktionen för att spara tiden som en poäng sparas: let scoreTime = (new Date).getTime() 
// poängVyn visas när man klickar på  " highscoreButton "
// let scoreTime = (new Date).getTime() 
//lägg applåder när man klarat det
//lägg ljudeffekt när användaren gissar fel



// StartView  
const lättButton = document.querySelector('#buttonLätt')
const mediumButton = document.querySelector('#buttonMedium')
const svårButton = document.querySelector('#buttonSvår')
let nameInput = document.getElementById('inputName')
const buttonStart = document.querySelector('#startButton')
const buttonHighscore = document.querySelector('#highscoreButton')
const viewStart = document.querySelector('#startview')
const viewPlay = document.querySelector('#playView')
const labelName = document.querySelector('#labelForName')

nameInput.addEventListener("change", (event) => {
	let namn = nameInput.value;
	console.log("namn:" + namn);
})

lättButton.addEventListener('click', () => {

})
mediumButton.addEventListener('click', () => {

})
svårButton.addEventListener('click', () => {

})
buttonStart.addEventListener('click', () => {

})
buttonHighscore.addEventListener('click', () => {

})

//playView
//Hangman:: path id="scaffold" , path id="legs"  path id="arms",path id="body",path id="head"
const scaffoldGubbe = document.querySelector('#scaffold')
const legsGubbe = document.querySelector('#legs')
const armsGubbe = document.querySelector('#arms')
const bodyGubbe = document.querySelector('#body')
const headGubbe = document.querySelector('#head')
//
let incorrectGuess = 0;
function handleIncorrectGuess() {
	incorrectGuess ++;

}






//gameoverView




//scorescreenView

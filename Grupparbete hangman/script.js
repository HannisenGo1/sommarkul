import {words} from './svenska-ord.js'

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



// StartView   ALLA VARIABLER 
const lättButton = document.getElementById('buttonLätt');
const mediumButton = document.getElementById('buttonMedium');
const svårButton = document.getElementById('buttonSvår');
let nameInput = document.getElementById('input-Name');
const buttonStart = document.querySelector('#startButton');
const buttonHighscore = document.querySelector('#highscoreButton');
const viewStart = document.querySelector('#startview');
const viewPlay = document.querySelector('#playView');
const labelName = document.querySelector('#labelForName');
const buttonBack = document.querySelector('#backButton');
const tangentbord = document.querySelector('#keyboard-container');


// Sparar 1 namn än sålänge,lokalt ! 

nameInput.addEventListener("change", (event) => {
	const namn = event.target.value; //hämta värdet från input
    localStorage.setItem("namn", namn); // sparar värdet
const sparadNamn = localStorage.getItem("namn");
	if (sparadNamn) {
		nameInput.value = sparadNamn; //om någon data finns sparat
	}
});
/* 
// Fel gissningar  / lägga till så den hamnar i scorescreen
let incorrectGuess = 0;
let correctGuess = 0;


function handleIncorrectGuess() {
	incorrectGuess ++;
if (correctGuess === true) {
	//slumpade bokstäverna, rätt 
} else if (incorrectGuess === true) {
	//slumpade bokstäverna, fel
}
}




 let tries = 0;
 while (true) {
	let guesses = prompt;
tries ++;
 
 if (guesses === countGuess){
	//ändra färg grönt 
 }else {
	//ändra färgen till rött
 }
 }
 */ 


 // väljer ut slumpat ord när man trycker på lätt knappen!!!
/* lättButton.addEventListener('click', () => {

const easywords = words.filter((word) => word.length > 14)
const randomWord = Math.floor(Math.random() * easywords.length);
const valdaOrd = easywords[randomWord];
console.log(valdaOrd)
})      
*/
const startForButtonDiv = document.querySelector('.buttonForStart');
lättButton.addEventListener('click', () => {
const svårighetsgradDiv = document.querySelector('.svårighetsgrad');
if (svårighetsgradDiv) {
startForButtonDiv.classList.add('hidden');
svårighetsgradDiv.classList.add('hidden');
const easywords = words.filter((word) => word.length > 14)
const randomWord = Math.floor(Math.random() * easywords.length);
const valdaOrd = easywords[randomWord];
console.log(valdaOrd)
}
});




/*
mediumButton.addEventListener('click', () => {
const mediumwords = words.filter((word) => word.length >= 10 && word.length < 13)
mediumwords= words[Math.floor(Math.random() * words.length)];
if (mediumButton) {

}

console.log(mediumwords)
})




svårButton.addEventListener('click', () => {
const hardwords = words.filter((word) => word.length >= 0 && word.length < 9)
hardwords= words[Math.floor(Math.random() * words.length)];
if (svårButton) {

}

console.log(hardwords)
})




/*
buttonStart.addEventListener('click', () => {

})
buttonHighscore.addEventListener('click', () => {

})
*/ 


// Alfabetet i en lista: 
const alfabetet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä", "Ö"];

// variabeln heter: words för hela listan med alla ord: const words


function getRandomInt(max) {
    return Math.floor(Math.random() * max);

} 






//playView
//Hangman:: path id="scaffold" , path id="legs"  path id="arms",path id="body",path id="head"
const scaffoldGubbe = document.querySelector('#scaffold')
const legsGubbe = document.querySelector('#legs')
const armsGubbe = document.querySelector('#arms')
const bodyGubbe = document.querySelector('#body')
const headGubbe = document.querySelector('#head')




//funktion för felaktiga & rätta bokstäver 
// Vid klickning av " tips/hint : ta bort 2 bokstäver - gråfärg"
// rätt = grönt, fel= rött    "disable"
// Antal gissningar : 
// gissningar = 0
// gissningar += 1 
// skriver ut variabeln:
// console.log ("Du gjorde " + (tries) + "Gissningar")






//gameoverView 
buttonStart.addEventListener('click', () => {

})
buttonHighscore.addEventListener('click', () => {

})
buttonBack.addEventListener('click', () => {

})


const highscore = document.querySelector('#high-score')

scorescreenView
// Visar endast namnen med denna funktionen .
buttonHighscore.addEventListener('click', () => {
sparadNamn = localStorage.getItem("namn");
if (sparadNamn) {
	highscorediv.textContent = sparadNamn
} 
}); 
nameInput.addEventListener('input', event => { // input namn för highscore
	highscore.innerText = event.target.value
})
// lägg till så att den visar både vunna & förlorade med antal gissningar , ordets längd, datum+tid för omgången


buttonBack.addEventListener('click', () => {

})

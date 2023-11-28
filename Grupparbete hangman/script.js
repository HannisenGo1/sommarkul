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
const viewPlay = document.querySelector('.playView');
const labelName = document.querySelector('.divForName');
const buttonBack = document.querySelector('#backButton');
const tangentbord = document.querySelector('.keyboard-container');
const tangent = document.querySelectorAll('.key')
const svårighetsgradText = document.querySelector('.svårighetsgradText');
const startMeny = document.querySelector('.startOchHigh')  //div m start o highscore
const svårighetsgradDiv = document.querySelector('.svårighetsgrad');
const highScoreWindow = document.querySelector('.highscorewindow')//highscore meny
const gameover = document.querySelector('.gameover') //gameover meny
const tryagainButton = document.querySelector('#tryagainButton'); //igen knapp
const gameoverButton = document.querySelector('.gameoverButton')//div för knapparna
const userNameField = document.querySelector('.user-name')
//div för lätt,m,svår
// Anteckning -- svårighetsgradDiv pekar just nu på själva diven som innehåller lätt, medium, svår-knapparna.
// Använder variabeln 'svårighetsgrad' för att lagra svårighetsgraden som spelet läser av.
let svårighetsgrad = ''
let chosenWord = ''
let incorrectGuess = 0
let correctGuess = 0
let totalGuess = 0
let userName = ''
let sparadNamn = ''
let gameState = 'start-view'
const startForButtonDiv = document.querySelector('.buttonForStart');
const highScoreDiv = document.querySelector('.highscorediv');
const easywords = words.filter((word) => word.length > 14)
const mediumwords = words.filter((word) => word.length <= 14 && word.length > 11)
const hardwords = words.filter((word) => word.length == 10 || word.length == 11)


svårighetsgradDiv.classList.add('hidden'); //lätt medium svår är gömd, tills användaren trycker på spela här knappen! 
highScoreWindow.classList.add('hidden'); //highscore div
gameover.classList.add('hidden');  //gameover view 
gameoverButton.classList.add('hidden'); //tillbaka,kör igen knapparna
startMeny.classList.add('visible')

buttonStart.addEventListener('click', () => {
	if (buttonStart) {
		startForButtonDiv.classList.add('hidden');
		svårighetsgradDiv.classList.add('visible');
		svårighetsgradText.classList.add('visible');
		highScoreDiv.classList.add('hidden'); 
		labelName.classList.add('hidden');
		sparaNamn()
		startMeny.classList.add('visible')
	}
});


buttonHighscore.addEventListener('click', () => {
	if (buttonHighscore){
	startForButtonDiv.classList.add('hidden');
	svårighetsgradDiv.classList.add('hidden');
	svårighetsgradText.classList.add('hidden');
	highScoreDiv.classList.add('hidden'); 
	startMeny.classList.add('hidden');
	labelName.classList.add('hidden');
	highScoreWindow.classList.remove('hidden');

	// göra en highscore div som sparar & visar namnen! 
	// det gamla spelet måste börja på 0 när man trycker på "kör igen"
	}
	}
);


buttonBack.addEventListener('click', () => {
    if (buttonBack){
    highScoreWindow.classList.add('hidden')
	startForButtonDiv.classList.remove('hidden');
	highScoreDiv.classList.remove('hidden');
gameover.classList.add('hidden');
gameoverButton.classList.add('hidden');
startMeny.classList.add('visible')
	console.log('Test')
    }
})




tryagainButton.addEventListener('click', () =>{
	startForButtonDiv.classList.remove('hidden');
	svårighetsgradDiv.classList.add('hidden');
	gameover.classList.remove('visible');
	gameoverButton.classList.remove('visible');
})

buttonBack.addEventListener('click', () =>{
	highScoreWindow.classList.add('hidden')
	startForButtonDiv.classList.remove('hidden');
	highScoreDiv.classList.remove('hidden');
gameover.classList.add('hidden');
gameoverButton.classList.add('hidden');
startMeny.classList.add('visible')
})






// Sparar 1 namn än sålänge,lokalt ! 

function sparaNamn(){
	const userName = nameInput.value; //hämta värdet från input
	localStorage.setItem("namn", userName); // sparar värdet
	const sparadNamn = localStorage.getItem("namn");
	console.log(sparadNamn)
	let newName = document.createElement('div')
	newName.innerText = sparadNamn
	userNameField.appendChild(newName)
}

// const gameState = {
// 	playerName: 'David',
// 	scores: []  // { name, correctGuesses, incorrectGuesses, ... }
// }

// nameInput.addEventListener("change", (event) => {
// 	const namn = event.target.value; //hämta värdet från input
//     localStorage.setItem("namn", namn); // sparar värdet
// 	const sparadNamn = localStorage.getItem("namn");
// 	if (sparadNamn) {
// 		nameInput.value = sparadNamn; //om någon data finns sparat
// 	}
// });
/* 




 // väljer ut slumpat ord när man trycker på lätt knappen!
/* lättButton.addEventListener('click', () => {

const easywords = words.filter((word) => word.length > 14)
const randomWord = Math.floor(Math.random() * easywords.length);
const valdaOrd = easywords[randomWord];
console.log(valdaOrd)
})      
*/

/*
mediumButton.addEventListener('click', () => {
if (mediumButton) {
const chosenWord = mediumwords[randomInt(mediumwords.length)]
}

console.log(mediumwords)
})




svårButton.addEventListener('click', () => {
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


const randomInt = max => Math.floor(Math.random() * max);


//playView

const scaffoldGubbe = document.querySelector('#scaffold')
const legsGubbe = document.querySelector('#legs')
const armsGubbe = document.querySelector('#arms')
const bodyGubbe = document.querySelector('#body')
const headGubbe = document.querySelector('#head')
// const gubbe = { scaffold, legs, arms, body, head }
// gubbe.legs
// let gubbe = [scaffold, legs, arms, .. ]

function startGame(){
	gameState = 'game-view'
	scaffoldGubbe.classList.add('invisible')
	legsGubbe.classList.add('invisible')
	armsGubbe.classList.add('invisible')
	bodyGubbe.classList.add('invisible')
	headGubbe.classList.add('invisible')
	startForButtonDiv.classList.add('hidden');
	svårighetsgradDiv.classList.add('hidden');
	svårighetsgradText.classList.remove('visible') 
	correctGuess = 0
	incorrectGuess = 0
	totalGuess = 0
	guessArray = []
}

lättButton.addEventListener('click', () => {
	startGame()
	chosenWord = easywords[randomInt(easywords.length)]
	gameplay()
})

mediumButton.addEventListener('click', () => {
	startGame()
	chosenWord = mediumwords[randomInt(mediumwords.length)]
	gameplay()
	
})

svårButton.addEventListener('click', () => {
	startGame()
	chosenWord = hardwords[randomInt(hardwords.length)]
	gameplay()
})

//Skapar dashes ('_ _ _'), och ersätter dashes med bokstäver
//när man trycker på rätt tangent:

let guessArray = []

// Helig David-text; vårda med omsorg

function checkIfVictory(guesses, secretLetters) {
	// guesses: lista med strängar, varje sträng är en bokstav
	// secretLetters: lista med strängar, varje är en bokstav
	for( let i=0; i<secretLetters.length; i++ ) {
		let letter = secretLetters[i]
		// Har vi gissat på den här bokstaven?
		if( guessArray.includes(letter) ) {
			// Bra, letter fanns. Kolla nästa
		}
		else {
			// Aj då! Bokstaven har inte blivit gissat på!
			return false
		}
	}
	return true
}

function gameplay(){
let displayedWord = chosenWord.replace(/./g, '<span class="dash">_</span>')
const submissionField = document.getElementById('line-form')
submissionField.innerHTML = displayedWord
window.addEventListener('keyup', e => {
	console.log('keyup', e.key, gameState);
	if (gameState != 'game-view'){
		return
	}
	let wordArray = chosenWord.split("")
	let dashes = document.getElementsByClassName('dash')
	if (wordArray.includes(e.key)){
		tangent.forEach(t => {
			if (t.innerText === (e.key).toUpperCase()) {
					t.classList.add('correct')
					}
				})
				wordArray.forEach((letter, index) => {
					if (letter.toUpperCase() === e.key.toUpperCase()) {
						dashes[index].innerText = letter.toUpperCase()
					}
				})
				correctGuess++
				guessArray.push(e.key)
			}
			else if (guessArray.includes(e.key)){
				e.preventDefault()
			}
			else{
			//const felTangent = ?
			tangent.forEach(t => {
				if (t.innerText === (e.key).toUpperCase()) {
						t.classList.add('incorrect')
						}
					})
			incorrectGuess++
			guessArray.push(e.key)
			if (incorrectGuess === 1){
				scaffoldGubbe.classList.remove('invisible')
			}
			else if (incorrectGuess === 2){
				headGubbe.classList.remove('invisible')
			}
			else if (incorrectGuess === 3){
				bodyGubbe.classList.remove('invisible')
			}
			else if (incorrectGuess === 4){
				armsGubbe.classList.remove('invisible')
			}else{
				legsGubbe.classList.remove('invisible')
				gameover.classList.add('visible'); //Gameover popup!!!
				gameoverButton.classList.add('visible')
				tangent.forEach(t => {
						t.classList.remove('correct')
						t.classList.remove('incorrect')
					})
					gameState = 'game-over-view'
			}
	}
})
}

// function updateGubbeIncorrectGuess() {}
// function updateGubbeCorrectGuess() {}




//gameoverView 



const highscore = document.querySelector('#high-score')

//scorescreenView
// Visar endast namnen med denna funktionen .
//buttonHighscore.addEventListener('click', () => {
//sparadNamn = localStorage.getItem("namn");
//if (sparadNamn) {
//	highscorediv.textContent = sparadNamn
//} 
//}); 
//nameInput.addEventListener('input', event => { // input namn för highscore
//	highscore.innerText = event.target.value
//})
// lägg till så att den visar både vunna & förlorade med antal gissningar , ordets längd, datum+tid för omgången

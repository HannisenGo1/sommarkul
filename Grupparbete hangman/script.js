//import {words} from './svenska-ord.js'

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
let nameInput = document.getElementById('input-Name')
const buttonStart = document.querySelector('#startButton')
const buttonHighscore = document.querySelector('#highscoreButton')
const viewStart = document.querySelector('#startview')
const viewPlay = document.querySelector('#playView')
const labelName = document.querySelector('#labelForName')
const buttonBack = document.querySelector('#backButton')


nameInput.addEventListener("change", (event) => {
	const namn = event.target.value; //hämta värdet från input
    localStorage.setItem("namn", namn); // sparar värdet
const sparadNamn = localStorage.getItem("namn");
	if (sparadNamn) {
		nameInput.value = sparadNamn; //om någon data finns sparat
	}
})

lättButton.addEventListener('click', () => {
const easywords = words.filter((word) => word.length > 14)

console.log(easywords)
})
//let a = 0
//for (let i = 0; i < words.length; i++){
// if (words[i].length > 15){
//   hardwords[a] = words[i]
//       a++
//   }
// }


mediumButton.addEventListener('click', () => {
const mediumwords = words.filter((word) => word.length >= 10 && word.length < 13)

console.log(mediumwords)
})

//let b = 0
//for (let i = 0; i < words.length; i++){
//if (words[i].length >= 10 && words[i].length < 13){
// mediumwords[b] = words[i]
//   b++
// }
// }


svårButton.addEventListener('click', () => {
const hardwords = words.filter((word) => word.length >= 0 && word.length < 9)

console.log(hardwords)
})

// let c = 0
// for (let i = 0; i < words.length; i++){
//     if (words[i].length >= 0 && words[i].length < 9){
//         hardwords[c] = words[i]
//         c++
//     }
// }



//funktion för felaktiga & rätta bokstäver 


/*
buttonStart.addEventListener('click', () => {

})
buttonHighscore.addEventListener('click', () => {

})
*/ 


// Alfabetet i en lista: 
const alfabetet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä", "Ö"];

//playView
//Hangman:: path id="scaffold" , path id="legs"  path id="arms",path id="body",path id="head"
const scaffoldGubbe = document.querySelector('#scaffold')
const legsGubbe = document.querySelector('#legs')
const armsGubbe = document.querySelector('#arms')
const bodyGubbe = document.querySelector('#body')
const headGubbe = document.querySelector('#head')

// Fel gissningar  / lägga till så den hamnar i scorescreen
let incorrectGuess = 0;
function handleIncorrectGuess() {
	incorrectGuess ++;

}





/* 
//gameoverView 
buttonStart.addEventListener('click', () => {

})
buttonHighscore.addEventListener('click', () => {

})
buttonBack.addEventListener('click', () => {

})

*/

scorescreenView
// Visar endast namnen med denna funktionen .
buttonHighscore.addEventListener('click', () => {
sparadNamn = localStorage.getItem("namn");
if (sparadNamn) {
	highscorediv.textContent = sparadNamn
} 
}); 
// lägg till så att den visar både vunna & förlorade med antal gissningar , ordets längd, datum+tid för omgången


buttonBack.addEventListener('click', () => {

})

const jsonData = required('./svenska-ord.json')

//knapparnas id: lätt, medium, svår ! 
// Math.Random () för att slumpa fram ord från listan! 
// input fältet för :: inputName    //console.log för att skriva ut namnet i consolen
// Använd localStorage för att spara datan i webbläsaren.
// Listan ska vara sorterad så att de bästa omgångarna visas överst: i första hand stigande på antal gissningar, i andra hand fallande på datum och tid för omgången. Man ska kunna växla till att visa omgångarna sorterade i fallande ordning på datum och tid.
//  JSON methods, stringify och parse.
// Använd Date-funktionen för att spara tiden som en poäng sparas: let scoreTime = (new Date).getTime() 
// poängVyn visas när man klickar på  " highscoreButton "



// StartView  
const lättButton = document.querySelector('#buttonLätt')
const mediumButton = document.querySelector('#buttonMedium')
const svårButton = document.querySelector('#buttonSvår')
let nameInput = document.querySelector('#inputName')
const buttonStart = document.querySelector('#startButton')
const buttonHighscore = document.querySelector('#highscoreButton')
const viewStart = document.querySelector('#startview')
const viewPlay = document.querySelector('#playView')

nameInput.addEventListener('click', () => {
	console.log(inputName);
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



//gameoverView


//scorescreenView

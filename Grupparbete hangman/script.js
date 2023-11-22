const jsonData = required('./svenska-ord.json')

//knapparnas id: lätt, medium, svår ! 
// Math.Random () för att slumpa fram ord från listan! 
// input fältet för :: inputName   

let lättButton = document.querySelector('buttonLätt')
let mediumButton = document.querySelector('buttonMedium')
let svårButton = document.querySelector('buttonSvår')
let nameInput = document.querySelector('inputName')
let buttonStart = document.querySelector('startButton')
let buttonHighscore = document.querySelector('highscoreButton')

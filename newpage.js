const newElement = document.createElement("p")
const parent = document.querySelector("body")
const elementButton = document.querySelector("#element-button")

// newElement.innerText = "Tjo!"

// parent.appendChild(newElement)

// console.log("Hej!")

// function addElement() {elementButton.addEventListener('click', () => {
//     const newElement = document.createElement("p")
//     newElement.innerText = "Tjo!"
//     parent.appendChild(newElement)
// })}

// addElement()

// const lineContainer = document.querySelector('.linecontainer')
// const line = document.createElement('div')

// const newWord = document.createElement('p')

// newWord.innerText = word
// parent.appendChild(newWord)

// for (let i = 0; i < word.length; i++){
//     const line = document.createElement('div')
//     line.classList.add('line')
//     lineContainer.appendChild(line)
// }

const hiddenWord = 'elementutväljning'
let displayedWord = hiddenWord.replace(/./g, '<span class="dash">_</span>')
const submissionField = document.getElementById('line-form')
submissionField.innerHTML = displayedWord

window.addEventListener('keyup', e => {
	let wordArray = hiddenWord.split("")
	let dashes = document.getElementsByClassName('dash')
	if (wordArray.includes(e.key)){
		wordArray.forEach((letter, index) => {
			if (letter === e.key){
				dashes[index].innerText = letter
			} 
		})
	}
})
// window.addEventListener('keyup', e => {
// 	let newElement = document.createElement('p')
// 	let textField = document.querySelector('.new-text')
// 	newElement.innerText = `${e.key}`
// 	textField.appendChild(newElement)
// })

// const correctWord = new Array(hiddenWord.length)


// for (let i = 0; i < correctWord.length; i++){
//     correctWord[i] = "_"
// }

// displayedWord = document.createElement('p')
// displayedWord.innerText = correctWord
// let submissionField = document.getElementById('line-form');
// submissionField.appendChild(displayedWord)


// function printLines(){
// 	let submissionField = document.getElementById('line-form');
// 	for (let i = 0; i < correctWord.length; i++){
// 	let letter = document.createElement('span');
//     letter.innerText = correctWord[i]
// 	submissionField.appendChild(letter);
// 	}
// }

// printLines()

// window.addEventListener('keyup', e => {
// 	let newElement = document.createElement('p')
// 	let textField = document.querySelector('.new-text')
// 	newElement.innerText = `${e.key}`
// 	textField.appendChild(newElement)
// })

// window.addEventListener('keyup', e => {
// 	if (correctWord.includes(e.key)){
// 		correctWord.forEach((letter, i)) {
// 			correctWord[i] = e.key
// 		}
// 	}
// })

// document.onkeyup = function(event){
//     let newGuess = event.key;
//         for (let i = 0; i < correctWord.length; i++){
//                 if (hiddenWord[i] == newGuess){
//                 correctWord[i] = newGuess
//                 }
//         }
// }

// let lineContainer = document.querySelector('.linecontainer')

// document.onkeyup = function(event){
//     let keyPress = event.key
//     lineContainer.appendChild(keyPress)
// }


//     if (correctWord.indexOf(newGuess) != -1){
//         for (let i = 0; i < correctWord.length; i++){
//             if (correctWord[i] == newGuess){
//                 hiddenWord[i] = newGuess

//                 correctWord.textContent = correctWord.join(" ")
//             }
//         }
//     }
// }

// function addElement() {
//     const newElement = document.createElement("p")
//     newElement.innerText = "Tjo!"
//     parent.appendChild(newElement)
// }

// addElement()
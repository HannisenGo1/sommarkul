import {words} from './svenska-ord.js'

// let easywords = []
// let a = 0
// for (let i = 0; i < words.length; i++){
//     if (words[i].length >= 10 && words[i].length < 13){
//         easywords[a] = words[i]
//         a++
//     }
// }
// console.log(easywords)

const easywords = words.filter((word) => word.length >= 10 && word.length < 13)

console.log(easywords)

// let mediumwords = []

// let b = 0
// for (let i = 0; i < words.length; i++){
//     if (words[i].length >= 13 && words[i].length < 15){
//         mediumwords[b] = words[i]
//         b++
//     }
// }

// console.log(mediumwords)

const mediumwords = words.filter((word) => word.length >= 13 && word.length < 15)

console.log(mediumwords)

// let hardwords = []

// let c = 0
// for (let i = 0; i < words.length; i++){
//     if (words[i].length > 15){
//         hardwords[c] = words[i]
//         c++
//     }
// }

// console.log(hardwords)

const hardwords = words.filter((word) => word.length > 15)

console.log(hardwords)

// function startGameEasy{
//     return 
// }

// if (easy === true){}

// if (medium === true){}

// if (hard === true){
//     word = hardwords[Math.random()]
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// console.log(hardwords[getRandomInt(hardwords.length)])

// easyButton.addEventListener ('click', () => {
//     const easy = true
// })

// if (easy === true){
//     const word = easywords[getRandomInt(easywords.length)]
// }

const word = easywords[getRandomInt(easywords.length)]

console.log(word)
// import {  } from './functionButtons.js'
//import { getAdvice } from './ajax.js'

const serchMeny = document.querySelector('.sök-container');
const findChampionButton = document.getElementById('championbutton'); //knappen för find champion
const divFindChampionButton= document.querySelector('.findChampionstart');
const myTeamButton = document.getElementById('team-button')
const divMyTeamButton = document.querySelector('.MyTeamstart');
const menyChampion =document.getElementById('championMenyn')// menyn för champions
const images = document.querySelector('.image') //bilder på pokemon
const addPokemonsButton = document.getElementById('addPokemonsbutton') //lägg till pokemon med knapp
const myTeam = document.getElementById('my-team');// meny för ens team 
const backmeny = document.querySelector('.backMenyn');
const backButton = document.getElementById('back-button');

menyChampion.classList.add('hidden') //menyn champion hidden
myTeam.classList.add('hidden'); //menyn my team hidden
backmeny.classList.add('hidden');


findChampionButton.addEventListener('click', async () => {
	serchMeny.classList.remove('hidden');
	divFindChampionButton.classList.add('hidden');
	divMyTeamButton.classList.add('hidden');
	findChampionButton.classList.add('hidden');
	menyChampion.classList.remove('hidden');
	myTeam.classList.add('hidden')
	backmeny.classList.remove('hidden');
});

myTeamButton.addEventListener('click', async () => {
	menyChampion.classList.add('hidden');
	divMyTeamButton.classList.add('hidden')
	myTeam.classList.remove('hidden');
	backButton.classList.remove('hidden');
	divFindChampionButton.classList.add('hidden');
	backmeny.classList.remove('hidden');
});
backButton.addEventListener('click', async () => { 
	divFindChampionButton.classList.remove('hidden');
	divMyTeamButton.classList.remove('hidden');
	backmeny.classList.add('hidden');
	menyChampion.classList.add('hidden');
	myTeam.classList.add('hidden');
 });




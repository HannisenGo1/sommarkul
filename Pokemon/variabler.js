// import {  } from './functionButtons.js'
const SerchMeny = document.querySelector('.sök-container');
const FindChampionButton = document.querySelector('#Find-button'); //knappen för find champion
const DivFindChampionButton= document.querySelector('.findChampion');
const MyTeamButton = document.querySelector('#team-button')
const DivMyTeamButton = document.querySelector('.MyTeam');

SerchMeny.classList.add('hidden'); // gömmer sökknappen

FindChampionButton.addEventListener('click', async () => {
	SerchMeny.classList.remove('hidden');
	DivFindChampionButton.classList.add('hidden');
	DivMyTeamButton.classList.add('hidden');
	FindChampionButton.classList.add('hidden');

});

MyTeamButton.addEventListener('click', async (event) => {
	event.stopPropagation
});




export { FindChampionButton, MyTeamButton, SerchMeny}
SerchMeny.classList.add('hidden'); // gömmer sökknappen

FindChampionButton.addEventListener('click', async () => {
	SerchMeny.classList.remove('hidden');
});

MyTeamButton.addEventListener('click', async (event) => {
	event.stopPropagation
});







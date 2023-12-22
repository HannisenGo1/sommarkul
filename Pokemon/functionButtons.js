import { getPokemon, fetchPokemonData, displayPokemon, normalizeName } from "./ajax.js";
import{ addToTeam, displayTeam} from "./storage.js"


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchbutton');
const searchForPokemonDiv = document.querySelector('.searchForPokemonDiv');
const addPokemonButton = document.querySelector('.addPokemonsbutton');
const pokemonInfoDiv = document.getElementById('pokemonInfo');
const kickFromTeamBtn = document.querySelector('.kickHere');
const toReservBtn = document.querySelector('.toreserv');
 let reservDiv = []
let countTeam= 0;
let countReserv = 0;
export const maxTeam = 3;

searchForPokemonDiv.classList.add('hidden');
const pokemonEnterDiv = document.querySelector('.pokemon-enter');

const nicknameInput = document.createElement('input');
nicknameInput.type = 'text';
nicknameInput.placeholder = 'choose a nickname';

searchButton.addEventListener('click', handlesearch);

searchInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter'){
		handlesearch();
	}
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    console.log('Starting initialization...');
    
    const pokemonList = await getPokemon();
    console.log('Fetched Pokemon list:', pokemonList);

    const addButtonList = await displayPokemon(pokemonList);
    console.log('Displayed Pokemon:', addButtonList);

    for (const addButton of addButtonList) {
      addButton.addEventListener('click', async function () {
        const index = addButtonList.indexOf(addButton);
        console.log('Button clicked at index:', index);

        if (index !== -1) {
          const selectedPokemon = pokemonList[index];
          console.log('Selected Pokemon:', selectedPokemon);

          await fetchPokemonData([selectedPokemon]);
          console.log('Fetched Pokemon data for selected Pokemon.');

          addpokemonToTeam();
        }
      });
    }

    console.log('Initialization complete.');
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});



async function handlesearch() {
  const name = normalizeName(searchInput.value);
  const allPokemon = await getPokemon();
  searchForPokemonDiv.classList.remove('hidden');

  try {
    const filterPokemon = allPokemon.filter((pokemon) => {
      const normalized = normalizeName(pokemon.name);
      return normalized.includes(name);
    });
    console.log('Filter result:', filterPokemon);

    if (filterPokemon.length > 0) {
      console.log('Filtered Pokemon:', filterPokemon);
      // Rensa tidigare resultat
      searchForPokemonDiv.innerHTML = '';
      // Hämta data för alla matchande Pokemon
      await fetchPokemonData(filterPokemon);
    } else {
      console.log('No matching Pokemon found');
      searchForPokemonDiv.innerHTML = '<p>No matching Pokemon found</p>';
    }
  } catch (error) {
    console.error('Error with filtering Pokemon', error);
  }
}



async function addpokemonToTeam() {
  const addButtons = document.querySelectorAll('.addPokemonsbutton');
  for (const button of addButtons) {
    button.removeEventListener('click', handleAddClick);
    button.addEventListener('click', handleAddClick);
  }
}

function handleAddClick(event) {
  event.preventDefault();
  const pokemonEnterDiv = event.currentTarget.closest('.pokemon-enter');
  const pokemonData = {
    name: pokemonEnterDiv.querySelector('h2').textContent,
    imageUrl: pokemonEnterDiv.querySelector('img').src,
    abilities: pokemonEnterDiv.querySelector('p').textContent
  };

  const nicknameInput = pokemonEnterDiv.querySelector('.nickname-input');
  const nickname = nicknameInput.value;

  if (nickname !== '') {
    pokemonData.nickname = nickname;
    addInTeam(pokemonData);
  } else {
    console.error('Please enter a nickname.', error);
  }
}


function addInTeam(pokemonData) {
  const nicknameInput = pokemonEnterDiv.querySelector('.nickname-input');
  const nickname = nicknameInput.value;

  const pokemon = {
    name: pokemonData.name,
    imageUrl: pokemonData.imageUrl,
    abilities: pokemonData.abilities,
    nickname: nickname,
  };

  if (team.membersPokemon.length < maxTeam) {
    team.membersPokemon.push(pokemon);
  } else {
    team.reservDiv.push(pokemon);
  }

  displayTeam();
}

function handleKickFromTeam(index) {
  const kickedPokemon = team.membersPokemon.splice(index, 1)[0];
  displayTeam();
}

function handleConfirmNickname(index) {
  const newNickname = document.querySelector(`.pokemon-enter2[data-index="${index}"] .smeknamn input`).value;
  team.membersPokemon[index].nickname = newNickname;
  displayTeam();
}



function handleSendToReserv(index) {
  const pokemonToMove = team.membersPokemon.splice(index, 1)[0];
  team.reservDiv.push(pokemonToMove);
  displayTeam();
}

function handleChangeOrder(index, newIndex) {
  const movedPokemon = team.membersPokemon.splice(index, 1)[0];
  team.membersPokemon.splice(newIndex, 0, movedPokemon);
  displayTeam();
}
searchForPokemonDiv.addEventListener('click', function (event) {
  if (event.target.classList.contains('addPokemonsbutton')) {
    const index = addButtonList.indexOf(event.target);
    const selectedPokemon = pokemonList[index];
    addChampionToTeam(selectedPokemon);
  }
});
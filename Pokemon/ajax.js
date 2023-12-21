let img = document.createElement('img')
let abilities = [];



// För att returnera endast små bokstäver!
function normalizeName(name) {
  return name.toLowerCase();
}

// FÖR ATT FÅ UT ALLA BILDERNA PÅ SIDAN
 async function getPokemon() {
  try {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const pokemonLista = data.results.map((pokemon) => ({
        name: pokemon.name,
        url: pokemon.url
      }));
      return pokemonLista;
    } else {
      console.error('No results');
      return [];
    }

  } catch (error) {
    console.error('Error with fetching', error);
    throw error; 
  }
}

//let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;

let attributes = []
// Till console.log:: 
const url = ('https://pokeapi.co/api/v2/')

//får ut bilderna
async function fetchPokemonData(pokemonList) {
  // Skapa en Promise-array för att vänta på alla fetch-anrop
  const fetchPromises = pokemonList.map(async (pokemon) => {
    try {
      const response = await fetch(pokemon.url);
      const pokemonData = await response.json();

      if (pokemonData.sprites && pokemonData.sprites.front_default) {
        let imageUrl = pokemonData.sprites.front_default;

        pokemonData.SpritesUrl = imageUrl;
        // Visa varje matchande Pokemon
        displayPokemon([pokemonData]);
      } else {
        console.error(`No image for ${pokemon.name}`);
      }
      console.log('finished processing', pokemon.name);
    } catch (error) {
      console.error(`Error fetch data ${pokemon.name}:`, error);
    }
  });

  // Vänta på att alla fetch-anrop ska slutföras innan du fortsätter
  await Promise.all(fetchPromises);
}



// DISPLAY POKEMON:: 
//pokemon-bilderna och förmågorna

async function displayPokemon(pokemonList) {
  const searchForPokemonDiv = document.querySelector('.searchForPokemonDiv');

  const addButtonList = [];

  for (const pokemonData of pokemonList) {
    const abilities = pokemonData.abilities || [];
    const championPokemonDiv = document.createElement('div');
    championPokemonDiv.classList.add('pokemon-enter');

    // Lägg till unik identifierare
    const uniqueId = pokemonData.name.toLowerCase();
    championPokemonDiv.setAttribute('id', uniqueId);

    // Bildelement
    const imageUrl = pokemonData.SpritesUrl;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = pokemonData.name;
    championPokemonDiv.appendChild(img);

    const rubrikPokemon = document.createElement('h2');
    rubrikPokemon.textContent = `Name: ${pokemonData.name}`;
    championPokemonDiv.appendChild(rubrikPokemon);

    // Visa abilities på pokemonen
    const pokemonTypes = document.createElement('p');
    pokemonTypes.textContent = `Abilities: ${abilities.map((ability) => ability.ability.name).join(', ')}`;
    championPokemonDiv.appendChild(pokemonTypes);

    // Lägg till championdiv i sökdiven
    searchForPokemonDiv.appendChild(championPokemonDiv);

    // Knapp för att lägga till pokemonen
    const addPokemonsButton = document.createElement('button');
    addPokemonsButton.classList.add('addPokemonsbutton');
    addPokemonsButton.textContent = 'Add champions to team';

    // Lägg till en unik klass för varje knapp baserat på Pokemonens namn
    addPokemonsButton.classList.add(`add-button-${uniqueId}`);

    championPokemonDiv.appendChild(addPokemonsButton);

    const nicknameInput = document.createElement('input');
    nicknameInput.type = 'text';
    nicknameInput.placeholder = 'choose a nickname';
    championPokemonDiv.appendChild(nicknameInput);

    addButtonList.push(addPokemonsButton);
  }

  return addButtonList;
}



export { getPokemon,fetchPokemonData, displayPokemon, normalizeName};
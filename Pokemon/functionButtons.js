const searchInput = document.getElementById('searchInput')// input id och label for "searchInput"
const maxTeam = 3; 
const reservDiv = document.querySelector('.reserver'); //reserv pokemons
const membersPokemon = document.querySelector('.pokemonmembers') // divklass för pokemonmedlemmarna 
const teamNuvarande = document.getElementById('NuvarandeTeam'); //div klass reserver med id NuvarandeTeam
const addNickname = document.getElementById('smeknamnsbyte');//div för namnbyte 
const nicknameInput = document.getElementById('inputNickname')
const confirmBtn = document.querySelector('.confirm')
const cancelBtn= document.querySelector('.cancel');
const searchdiv = document.querySelector('.sök-container')
const searchForPokemonDiv = document.querySelector('.searchForPokemonDiv')
//element med egenskaper
const addPokemonButton = document.querySelector('.addPokemonsbutton')
const pokemonInfoDiv = document.getElementById('pokemonInfo')
const kickFromTeamBtn = document.querySelector('.kickHere');
const searchButton = document.getElementById('searchbutton');//button id för sökknappen

searchForPokemonDiv.classList.add('hidden');
// välja nya lagmedlemmar från en sökbar lista med alla pokemons 
// sökknappen med labelinput fältets sökning

// [[[[ FUNGERAR !!! ]]]] inte snyggt 
// skriver ut pokemonbilden genom pokemonsökning och sedan genom searchbutton skriv det ut! 
const pokemonbilder = []
function getValue(e) {
  // få tag i labeln
  const parent = e.target.closest('label')
  // input fältet
  const searchInput = document.getElementById('searchInput')
  // inputets värde till värdet
  const searchValue = searchInput.value
  // skickar bara om fältet inte är tomt! 
  if (inputValue !== "") {
    pokemonbilder.push(searchInput.Value)
  }
  console.log(pokemonbilder)
}
searchButton.addEventListener('click', getValue)

const listaPokemon = [ 
{name: 'bulbasaur'},
{url: "https://pokeapi.co/api/v2/pokemon/bulbasaur/"
}
]
listaPokemon.push(searchInput.value)
// slut på kod


let team = {
membersPokemon: [],
reservDiv:[]
};

function displayPokemon (pokemon){
const pokemonInfoDiv = document.getElementById('pokemonInfo')
const image = document.querySelector('.image') //visar bilden i image diven



//RENSA INNEHÅLLET 
pokemonInfoDiv.innerHTML = ''; 
image.innerHTML ='';   

//bilderna inne i {sprites} är: front_default

const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`; 

const img = document.createElement('img')

img.src = imageUrl;  
img.alt = pokemon.name;  //kolla detta
image.appendChild(img) //lägger till det nya img elementet

const rubrikPokemon = document.getElementById('rubrikPokemon');
rubrikPokemon.textContent = `Name: ${pokemon.name}`
pokemonInfoDiv.appendChild(pokemonNames);

const pokemonTypes = document.createElement('p');
pokemonType.textContent = `Types: ${pokemon.types.map(type => type.type.name).join(', ')}`
pokemonInfoDiv.appendChild(pokemonTypes);
}

//"pokemon-species"
// https://pokeapi.co/api/v2/pokemon-species/132/  <- exempel ditto
//https://pokeapi.co/api/v2/pokemon-species/{id}/ <- blir id
//"ability"
//https://pokeapi.co/api/v2/ability/150/
//https://pokeapi.co/api/v2/ability/{id}/
//STAT: name: "hp"
//url: https://pokeapi.co/api/v2/stat/1/
//state: name "attack"
//url:https://pokeapi.co/api/v2/stat/2/ 
// state name: "defense"
//url: "https://pokeapi.co/api/v2/stat/3/"
//state name "special-attack"
//url: "https://pokeapi.co/api/v2/stat/4/"
//stat {name:"special-defense"
//url: "https://pokeapi.co/api/v2/stat/5/"

// "gender", "pokemon", "pokemon-color", "pokemon-form", "pokemon-habitat", "pokemon-shape",  "region", "stat", "type", "super-contest-effect"
//
// få ut informationen om varje pokemon :




addPokemonButton.addEventListener('click', async () => {
		addInTeam(data.name);
	});

document.addEventListener('click', function (event) {
	const target = event.target;

	if(target.classList.contains ('kickHere')){
		const enterPokemon = target.closest('.pokemon-enter');
		if (enterPokemon){
	const pokemonName = enterPokemon.querySelector('.rubrikPokemon').textContent;
		removeFromTeam(pokemonName, false);
		}
	}
});
// om pokemonen är i "laget" eller i reserv platserna
function removeFromTeam (pokemonName, reserverade) {
 //förklara denna ->
 //
	const removeFrom = reserverade ? team.reservDiv : team.membersPokemon;
	const index = removeFrom.findIndex((p) => p.name === pokemonName);
	if (index !==-1) {   // kontrollera om index inte är -1
		removeFrom.splice(index,1);//ta bort pokemon om index hittas
		//om medlemmar tas bort flyttas den första pokemon från reservdiv till memberspokemon.
	}if (!reserverade && team.reservDiv.length >0) {
			team.membersPokemon.push(team.reservDiv.shift())
		}
	
	displayteam();
	teamCompleted();
}



function teamCompleted(){
	const message = document.getElementById('klarMeddelande')
if (teamCompleted()) {
	message.innerText = 'The team is completed'
} else {
	message.innerText = 'Your team is not completed'
}
}

const attributes = [
	"ability", 
	"gender", 
	"pokemon", 
	"pokemon-color", 
	"pokemon-form", 
	"pokemon-habitat", 
	"pokemon-shape", 
	"pokemon-species", 
	"region", 
	"stat", 
	"type", 
	"super-contest-effect"
];

const url = ('https://pokeapi.co/api/v2/')

// Få all datan i console.log ! 
async function fetchData(){ 
fetch(url)
.then(res => {
	console.log(res);
	if(res.ok){
		attributes.forEach (function (item,index){
		fetch(`${url}${item}/`)
		.then(res => res.json()) 
		.then(data => {
			console.log(item,data);
		})
		.catch(error => console.log('ERROR', error));
	});
 	} else{
		console.log('Fel med fetching');
	}
})
.catch(error => console.log('ERROR', error));
}
fetchData();

// SÖK KNAPPEN GER ENDAST UT POKEMON NOT FOUND ! 

// släng in värdet i arrayen utifrån namnet och anropa url som finns i objektet. 

//const arraypokemon {
//name:"bulbasar",
//url:"https://pokeapi.co/api/v2/pokemon/bulbasaur/"
//}

searchButton.addEventListener('click', async () => {
searchForPokemonDiv.classList.remove('hidden');
const name = searchInput.value.toLowerCase();

try{
	const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;
	console.log(apiUrl)
	const response = await fetch(apiUrl);

	if(response.ok) { 
		const data = await response.json();
		displayPokemon(data);
		data.value = arraypokemon;
	} else {
		console.log('pokemon not found')
		document.querySelector('.pokemonLista').innerHTML= 'pokemon are not found'
	}
} catch (error){
	console.error('ERROR', error)
}
});


//LÄGG TILL POKEMON I SITT LAG SAMT EFTER 3 I RESERV ! 
function addInTeam (pokemonName) {
	const pokemon = {name: pokemonName}

	if (team.membersPokemon.length < maxTeam){
		team.membersPokemon.push(pokemon);
	}else {
		team.reservDiv.push(pokemon);
	}
	displayTeam();
}
// KNAPPEN FÖR ATT LÄGGA TILL SMEKNAMN
confirmBtn.addEventListener('click', async () => {
	const newName = nicknameInput.value;
	addNickname.style.display ='none';
});

function teamComplete(){
	return team.membersPokemon.length === maxTeam;
}


kickFromTeamBtn.addEventListener('click', async () => {

})






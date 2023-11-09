const books = [
	{
		id: 1,
		title: "The Great Gatsby",
		author: "F.Scott Fitzgerald",
		genre: "Classic",
		price: 9.99
	},
	{
		id: 2,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		genre: "Classic",
		price: 11.99
	},
	{
		id: 3,
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling",
		genre: "Fantasy",
		price: 12.99
	},
	{
		id: 4,
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		genre: "Fantasy",
		price: 10.49
	},
	{
		id: 5,
		title: "1984",
		author: "George Orwell",
		genre: "Dystopian",
		price: 8.99
	},
	{
		id: 6,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		genre: "Fiction",
		price: 7.99
	},
	{
		id: 7,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		genre: "Romance",
		price: 9.49
	},
	{
		id: 8,
		title: "The Da Vinci Code",
		author: "Dan Brown",
		genre: "Mystery",
		price: 13.99
	},
	{
		id: 9,
		title: "The Alchemist",
		author: "Paulo Coelho",
		genre: "Adventure",
		price: 11.99
	},
	{
		id: 10,
		title: "The Hunger Games",
		author: "Suzanne Collins",
		genre: "Dystopian",
		price: 10.99
	},
	{
		id: 11,
		title: "The Shining",
		author: "Stephen King",
		genre: "Horror",
		price: 14.99
	},
	{
		id: 12,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		genre: "Fantasy",
		price: 15.99
	},
	{
		id: 14,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		genre: "Romance",
		price: 9.49
	},
	{
		id: 15,
		title: "The Girl on the Train",
		author: "Paula Hawkins",
		genre: "Thriller",
		price: 12.49
	},
	{
		id: 16,
		title: "The Road",
		author: "Cormac McCarthy",
		genre: "Post-Apocalyptic",
		price: 10.99
	},
	{
		id: 17,
		title: "The Martian",
		author: "Andy Weir",
		genre: "Science Fiction",
		price: 11.99
	},
	{
		id: 18,
		title: "Moby-Dick",
		author: "Herman Melville",
		genre: "Adventure",
		price: 10.99
	},
	{
		id: 19,
		title: "The Kite Runner",
		author: "Khaled Hosseini",
		genre: "Drama",
		price: 11.49
	},
	{
		id: 20,
		title: "Brave New World",
		author: "Aldous Huxley",
		genre: "Dystopian",
		price: 9.99
	},
	{
		id: 21,
		title: "The Road Not Taken",
		author: "Robert Frost",
		genre: "Poetry",
		price: 6.99
	},
	{
		id: 22,
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		genre: "Mystery",
		price: 13.99
	},
	{
		id: 23,
		title: "The Adventures of Sherlock Holmes",
		author: "Arthur Conan Doyle",
		genre: "Mystery",
		price: 10.99
	},
	{
		id: 24,
		title: "A Tale of Two Cities",
		author: "Charles Dickens",
		genre: "Historical Fiction",
		price: 8.99
	},
	{
		id: 25,
		title: "The Silent Patient",
		author: "Alex Michaelides",
		genre: "Psychological Thriller",
		price: 12.99
	}
];

//Uppgift 1 Hur många böcker finns det i affären?
let Antalbooks = books.length;
console.log('Det finns ' + Antalbooks + ' böcker i affären');


// UPPGIFT 2 Namn på böckerna!  
const bookNames = [
'The Great Gatsby', 'To Kill a Mockingbird'
, "Harry Potter and the Sorcerer's Stone"
,"The Hobbit" ,"1984", "The Catcher in the Rye",
"Pride and Prejudice", "The Da Vinci Code"
,"The Alchemist", "The Hunger Games" ,"The Shining" ,
"The Lord of the Rings", "Pride and Prejudice"
,"The Girl on the Train", "The Road", "The Martian",
"Moby-Dick", "The Kite Runner", "Brave New World"
, "The Road Not Taken", "The Girl with the Dragon Tattoo"
, "The Adventures of Sherlock Holmes"
, "A Tale of Two Cities", "The Silent Patient" 
]
//tar ut title från listan
console.log('Namn på böckerna:');
console.log(bookNames) 

//UPPGIFT 3 
//Genre koden
console.log('Fantasy böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Fantasy" ) {
		console.log(bok.title);
		console.log(bok.price);
	}
})

//UPPGIFT 4
console.log('');
console.log('Dystopian böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Dystopian" ) {
		console.log(bok.title);
	}
})
console.log('')
console.log('klassiker böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Classic" ) {
		console.log(bok.title);
	}
})

console.log('')
console.log('Mysterie böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Mystery" ) {
		console.log(bok.title);
	}
})

//UPPGIFT 5 
// namn o pris på alla böcker över $10
console.log('')
console.log('Alla böcker över $10: ');
books.forEach(bok => {
	if (bok.price >= "10" ) {
		console.log(bok.title);
		console.log(bok.price);
	}
})

// Få ut totala värdet för hela bokinnehavet
//Uppgift 6  
console.log('');
console.log('Totala priset för alla böckerna: ');
let totaltpris = 0;

books.forEach(book => {
	if (book.price >= 0 ) {
		totaltpris += Math.floor(book.price);
	}
});
console.log (totaltpris);

/*
//Uppgift 7 Vilka böcker är värd mest,dysto. elr myster.
console.log('');
console.log('Totala priset för alla böckerna: ');
let priset = 0;
books.forEach(book => {
	if (book.price >= 0 ) {
		totaltpris += book.price;
	}
});
console.log (totaltpris); */


//Uppgift 8 Skriv ut namnen på böcker i bokstavsordning
function BokstavBokDesc (a,b) {
	if (a.title < b.title) {
	return -1
	} else if (a.title > b.title){
		return 1
	}else {
		return 0
	}
}
const bb = [...books];
bb.sort(BokstavBokDesc);
const titles = bb.map(book => book.title);
console.log (titles);

//Uppgift 9

//Uppgift 10

//Uppgift 11
books.forEach(book => {
  if (!book.title.toLowerCase().startsWith("the")) {
    console.log(book.title);
  }
});








/*
let genre = books.map(books => title);
for (let i=0; i< books.length; i++) {
	if(genre === 'Fantasy'){
		genre.push(genre)
		console.log('Fantasy Genre: ');
	
	}	
}
console.log('Fantasy Genre: ');
*/
/*
//tar ut title från listan ovanför genom map funktionen 
const namebooks = books.map(book => title);



function AllaBooks() {
	return namebooks;
}



//exporterar allt från books till main.js
exports = {books};
*/

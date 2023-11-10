// Importera data från books.js

const { books, bookNames } = require("./books");






//Uppgift 1 Hur många böcker finns det i affären?
let Antalbooks = books.length;
console.log('Det finns ' + Antalbooks + ' böcker i affären');

//Uppgift 2
//tar ut title från listan
console.log('');
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



//Uppgift 7 Vilka böcker är värd mest,dysto. elr myster.

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
// Vilken bok finns det en dubblett av? 


//Uppgift 10
//Vilka författare har namn mer än 2, ta inte med det med punkt.


//Uppgift 11
// 11 Skriv ut namnen på alla författare i  bokstavsordning. Sortera efter författarens efternamn.



//Uppgift 12
//Skriv ut namnen på alla böcker vars titel inte börjar med "The".
console.log ('');
books.forEach(book => {
  if (!book.title.toLowerCase().startsWith("the")) {
    console.log(book.title);
  }
});

//Uppgift 13
// Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.
console.log('');
books.sort((a, b) => a.title.length - b.title.length);

console.log('Böcker sorterade efter titelns längd i stigande ordning:');
books.forEach(book => {
  console.log(book.title);
}); 

//14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.
console.log('');
function addBook(id, title, author, genre, price) {
    const newBook = {
      id: id,
      title: title,
      author: author,
      genre: genre,
      price: price
    };

    books.push(newBook);
    books.sort((a, b) => a.id - b.id);

    console.log('Boken', "${title}" ,'har lagts till i listan.');
  }

  addBook(26, "Star Wars", "Bert Bertsson", "Fiction", 7);


  console.log("Uppdaterad lista av böcker:");
  console.log(books);



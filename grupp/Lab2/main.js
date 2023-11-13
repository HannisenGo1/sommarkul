// Importera data från books.js

const { books, bookNames } = require("./books");


console.log('1. Hur många böcker finns det i affären?')
let Antalbooks = books.length;
console.log('Det finns ' + Antalbooks + ' böcker i affären');

//tar ut title från listan
console.log('2. Skriv ut namnen på alla böcker');
console.log('Namn på böckerna:');
console.log(bookNames) 
console.log('');
//UPPGIFT 3 
//Genre koden
console.log('3.Skriv ut namn och pris för alla böcker av typen Fantasy ')
console.log('Fantasy böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Fantasy" ) {
		console.log(bok.title);
		console.log(bok.price);
	}
})
console.log('');
//UPPGIFT 4
console.log('4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.');
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
console.log('');
console.log('')
console.log('Mysterie böckerna är:');
books.forEach(bok => {
	if (bok.genre === "Mystery" ) {
		console.log(bok.title);
	}
})
console.log('');
//UPPGIFT 5 
// namn o pris på alla böcker över $10
console.log('5. Skriv ut namn och pris för alla böcker som kostar över $10.')
console.log('Alla böcker över $10: ');
books.forEach(bok => {
	if (bok.price >= "10" ) {
		console.log(bok.title);
		console.log(bok.price);
	}
})

console.log('');
// Få ut totala värdet för hela bokinnehavet
//Uppgift 6  
console.log('6. Hur mycket är hela bokinnehavet värt?');
console.log('Totala priset för alla böckerna: ');
let totaltpris = 0;

books.forEach(book => {
	if (book.price >= 0 ) {
		totaltpris += Math.floor(book.price);
	}
});
console.log (totaltpris);


console.log('');
//Uppgift 7 
console.log('7.Vilka böcker är sammanlagt värda mest, dystopian eller mystery');
//reduce = beräknar totalvärdet av böckerna och summerar priserna.
//filter används för att plocka ut genrerna
const highestValue = (books) => books.reduce((total,book) => total + book.price, 0);

const Dystopian = books.filter (book => book.genre === 'Dystopian');

const DystopianValue = highestValue(Dystopian);

const Mystery= books.filter (book=> book.genre === 'Mystery' );
const MysteryValue = highestValue (Mystery);


if (DystopianValue > MysteryValue) {
	console.log('De dyraste böckerna är genre Dystopian');
} else if (MysteryValue > DystopianValue) {
	console.log('De dyraste böckerna är genre Mystery ')
} else {
	console.log ('Böckerna är värda lika mycket i genrarna Mystery & Dystopian');
}

console.log('');
//Uppgift 8 Skriv ut namnen på böcker i bokstavsordning
console.log('8 Skriv ut namnen på alla böcker i bokstavsordning.');
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
console.log('');

//Uppgift 9
// Vilken bok finns det en dubblett av? 
console.log('9. Vilken bok finns det en dubblett av?');


console.log('');
//Uppgift 10
//Vilka författare har namn mer än 2, ta inte med det med punkt.
console.log('10 Författare mer än 2 ord och utan punkt');

//filter är för att först utesluta författarna som har punkt, sedan includes för att kontrollerar om det finns punkt, split används för att dela upp författarens namn och kontrollerar om det finns mer än två namn/ord.
const authorsutan = books.filter(book => !book.author.includes('.'))
.filter(book => book.author.split(' ').length > 2);

authorsutan.forEach(book => {
	console.log(book.author);
});


console.log('');
//Uppgift 11
// 11 Skriv ut namnen på alla författare i  bokstavsordning. Sortera efter författarens efternamn.
//pop används för att få ta efternamnet efter mellanslag,"delar upp namnen"
//localeCompare sorterar i bokstavsordning
console.log('11. Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.')

const AuthorsLastname = books
.map(book => book.author.split(" ").pop())
.sort((a,b) => a.localeCompare(b));
AuthorsLastname.forEach(author => {
 console.log(author);
});

//Uppgift 12
//Skriv ut namnen på alla böcker vars titel inte börjar med "The".

console.log ('12 Skriv ut namnen på alla böcker vars titel inte börjar med The ');
books.forEach(book => {
  if (!book.title.toLowerCase().startsWith("the")) {
    console.log(book.title);
  }
});
console.log('');

//Uppgift 13
// Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.
console.log('13. Skriv ut böckernas titel, sorterat efter titelns längd och i stigande ordning ');
books.sort((a, b) => a.title.length - b.title.length);

books.forEach(book => {
  console.log(book.title);
}); 

console.log('');
//14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.

console.log('Ska kunna lägga till en ny bok sist i listan');
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

    console.log('Boken ${"title"} har lagts till i listan.');
  }

  addBook(26, "Star Wars", "Bert Bertsson", "Fiction", 7);


  console.log("Uppdaterad lista av böcker:");
  console.log(books);
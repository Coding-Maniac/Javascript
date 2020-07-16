class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
}

function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let bookName of favoriteBooks) {
		console.log(bookName);
	}
}
function loadBooks( /* .. */ ) {
	// TODO: call fakeAjax( .. );
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

//My-ANSWER
class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
  addFavoriteBook(bookName){
    if(!bookName.includes("Great")){
      this.favoriteBooks.push(bookName)
    }
  }
  printFavoriteBooks(){
    console.log(`Number of Favorite Books are ${this.favoriteBooks.length}`)
    for (let bookName of this.favoriteBooks){
      console.log(bookName)
    }
  }
}

function loadBooks( bookshelf) {
	// TODO: call fakeAjax( .. );
  fakeAjax(BOOK_API,function onBooks(bookNames){
    for(let bookName of bookNames){
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
  })
}

function lang(langFav){
  langLoader(BOOK_API,function lang(LangNames){
    for(let langName of LangNames){
      langFav.addFavoriteBook(langName);
    }
    langFav.printFavoriteBooks();
  })
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf();
loadBooks(myBooks);
var myLang = new Bookshelf();
lang(myLang);



// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
function langLoader(url,cb){
  setTimeout(function fakeLoader(){
    cb([
      "Javascript Great",
      "React Great",
      "Node JS Great",
      "Python",
      "Java"
    ])
  },500)
}



class Publication{
	constructor(title,author,pubDate) {
	  this.title = title;
	  this.author = author;
	  this.pubDate = pubDate;
	}
	print(){
		console.log(`
		Title : ${this.title}
		By: ${this.author}
		Publication Date: ${this.pubDate}`)
	}
}

class Book extends Publication{
	constructor(bookDetails){
		super(
			bookDetails.title,
			bookDetails.author,
			bookDetails.publisehedOn
		);
		this.publisher = bookDetails.publisher;
		this.ISBN = bookDetails.ISBN;

	}
	print(){
		super.print();
		console.log(
			`Publisher : ${this.publisher}
			ISBN: ${this.ISBN }`
		)
	}
}

class BlogPost extends Publication{
	constructor(title,author,pubDate,URL){
		super(title,author,pubDate);
		this.URL = URL;
	}
	print(){
		super.print();
		console.log(this.URL);
	}
}

var YDKJS = new Book({
	title:"Learning JS",
	author:"Sanjay Kapilesh",
	publisehedOn:"June 2020",
	publisher:"Razz Security",
	ISBN: "12345-2121"
});

YDKJS.print();
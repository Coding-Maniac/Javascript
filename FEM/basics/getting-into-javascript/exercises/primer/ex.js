// TODO: define addFavoriteBook(..) function
addFavoriteBook(bookname):


// TODO: define printFavoriteBooks() function
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
//MY ANSWER:
function addFavoriteBook(bookName){
    if (!bookName.includes("Great")){
      favoriteBooks.push(bookName);
    }
  };
  function printFavoriteBooks(){
    console.log(`Favorite Books: ${favoriteBooks.length}`)
    //for-loop method1
    // for (let i=0;i<favoriteBooks.length;i++){
    //   console.log(`${i}.${favoriteBooks[i]}`)
    // }
    //for..of loop
    for (let book of favoriteBooks){
        console.log(book)
    }
  }
  
  // TODO: define printFavoriteBooks() function
  
  var favoriteBooks = [];
  
  addFavoriteBook("A Song of Ice and Fire");
  addFavoriteBook("The Great Gatsby");
  addFavoriteBook("Crime & Punishment");
  addFavoriteBook("Great Expectations");
  addFavoriteBook("You Don't Know JS");
  printFavoriteBooks();
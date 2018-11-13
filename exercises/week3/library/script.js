function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

function Library() {
  this.books = [];
  this.addBook = function(book) {
    this.books.push(book);
  };
  this.getBooksByYear = function(year) {
    let arr = [];
    for (let book of this.books) {
      if (book.year === year) {
        arr.push(book);
      }
    }
    console.log(arr);
  };
}

let book = new Book('Animal Farm', 'George Orwell', 1945);
let library = new Library();
library.addBook(book);
library.getBooksByYear(1945); // -> [{name: 'Animal Farm', …}]
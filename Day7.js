// Creat an object representic a book with properties like title,auther, year and log result on the console.

const book = {
  title: "destiny",
  author: "shahbaz",
  year: "2028",
};

console.log("book", book);

// access and log the title and auther properties of the book object

console.log("title", book.title);
console.log("auther", book.author);

// add a method to book oject that return a string with the books title and aither, and lo the result of calling this method.

const book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  getBookInfo() {
    return `${this.title} by ${this.author}`;
  },

  updateYear(newYear) {
    this.year = newYear;
  },
};

book1.updateYear(2024);

console.log("method", book1);

// create a nested object representing a liabraru with properties like name and books, and log the liabrary object to the console.

const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
};

console.log(library);

// access and log the name of the liabrary and titles of all the boks in liabrary.
console.log("Library Name:", library.name);

library.books.forEach((book) => {
  console.log(book.title);
});

// add a method to the book object that uses this keyword to return a string with the books title and yaer and log the result of calling this method.

// Use a for in loop to iterate over the properties of the book boject annd log each property and its value.

const book3 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
};

for (const property in book3) {
  if (book3.hasOwnProperty(property)) {
    console.log(`${property}: ${book3[property]}`);
  }
}

// use object.keys and object.values methods to log all the keys and values of the book object.

const book4 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
};

// Log all keys
const keys = Object.keys(book4);
console.log("Keys:", keys);

// Log all values
const values = Object.values(book4);
console.log("Values:", values);

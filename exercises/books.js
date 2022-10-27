/* 
You are going to creat a map of yor Favorite Books.
You will need to either look them up on Amazon, or Barnes and Nobles
The key should be the ISBN-10 or ISBN-13 value.
The value should be the title of the book.

*/

const books = new Map();
books.set(978_1536881288, 'Atomic Habits by Dave Johnston');
books.set(978_1800752610, 'River of the Gods by Candice Millard');
books.set(978_0670785933, 'The Body Keeps the Score by Bessel Van der Kolk');
books.set(978_0316478526, 'Talking to Strangers by Malcom Gladwell');
books.set(978_0521223607, 'Mortal Questions by Thomas Nagel');
books.set(978_1138127043, 'History of Western Philosophy by Bertrand Russell');

// callback function
function bookDatabase(value, key) {
    console.log(`ISBN: ${key} - Book Title:${value}`);
}

// forEach method to display data
function displayBooksWanted(){
    books.forEach(bookDatabase);
}

displayBooksWanted();
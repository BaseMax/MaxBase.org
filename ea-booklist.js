// Ivan Kouznetsov
const findBooksByAuthor = (bookList, author) => {
    // only use middle initial for search
    let tempMiddleName = author.middleName.substring(0,1);
    // speed up search by sorting books frist 
    /*bookList = */bookList.slice().sort((a,b) => {
        // Or String.prototype.localeCompare
        if(a.author.lastName < b.author.lastName)
            return -1;
        if(a.author.lastName > b.author.lastName)
            return 1;
        return 0;
    });
    let books = [];
    let i = 0;
    bookList.forEach(function(book) {
        if(book.author.middleName.substring(0,1) === tempMiddleName &&
            book.author.firstName === author.firstName &&
            book.author.middleName === author.middleName &&
            book.author.lastName === author.lastName){
            books[i++] = book;
        }
    });
    return books;
}
var bookList = [
    {name:"Book1",author:{firstName:"Max",lastName:"Base",middleName:"T"}},
    {name:"Book2",author:{firstName:"Max",lastName:"Base",middleName:"Test"}},
    {name:"Book3",author:{firstName:"Max",lastName:"Base",middleName:"Test"}},
    {name:"Book4",author:{firstName:"Maria",lastName:"Stephin",middleName:"D."}},
    {name:"Book5",author:{firstName:"Ali",lastName:"Ariamey",middleName:""}},
    {name:"Book5",author:{firstName:"Bimax",lastName:"Reyma",middleName:"Test"}},
];
var author = {
    firstName: "Max",
    lastName: "Base",
    middleName: "Test",
};
// console.log( bookList );
var result = findBooksByAuthor(bookList, author);
// console.log( bookList );
console.log( result );

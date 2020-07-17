// Ivan Kouznetsov
const findBooksByAuthor = (bookList, author) => {
	// only use middle initial for search
	author.middleName = author.middleName.substring(0,1);
	let books = [];
	let i=0; 
	
	//speed up search by sorting books frist 
	bookList = bookList.sort((a,b) => a.author.lastName - b.author.lastName);
	
	for (const book in bookList){
		if (book.author.firstName === author.firstName &&
		  book.author.middleName === author.middleName &&
			book.author.lastName === author.lastName){
				books[++i] = book;
			}
	}
	
	return books;
}

function getTotalBooksCount(books) {
return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //if borrows[0].returned === false => total++
  let total = 0; 
  for (let prop in books) {
    const {borrows} = books[prop]
    if (borrows[0].returned === false) {
      total++
    }
  }
return total
}

//////////////////////////////////////////////////////////////////////////////

function getMostCommonGenres(books) {
  let arry = []; 
  books.filter((book) => arry.push(book.genre))
  const _NameAndCount = arry.reduce((object, current) => {
    if (object[current]) {
      object[current] += 1
    } else {
      object[current] = 1
    }
    return  object
  }, {})
  
  let result = [];
  for (const [genre, sum] of Object.entries(_NameAndCount)) {
    result.push({name: genre, count: sum})
  }
  result.sort((a, b) => b.count - a.count) 
  return result.slice(0,5)
 }

function getMostPopularBooks(books) {
  let popBook = books.map((book) => {
  return {name: book.title, count: book.borrows.length};
}); 
return popBook.sort((a,b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}

function _getAuthorBorrowCount(books, author) {
  const bookCount = books.map((book) => {
    if (book.authorId === author.id) {
      return book.borrows.length
    } else {
      return 0
    }
  })
  return bookCount.reduce((total, book) => {
    return total + book
  }, 0)
}

function getMostPopularAuthors(books, authors) {
  return authors.map((author) => {
    return {name: `${author.name.first} ${author.name.last}`, count: _getAuthorBorrowCount(books, author)}
  })
  .sort((authorA, authorB) => (authorB.count > authorA.count ? 1 : -1)).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

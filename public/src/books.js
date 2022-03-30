function findAuthorById(authors, id) {
  //find()
  return authors.find(item => item.id === id)
}

function findBookById(books, id) {
  return books.find(item => item.id === id)
}

function partitionBooksByBorrowedStatus(books) {
let result = [];
let booksCheckOut = books.filter((book) => book.borrows[0].returned === false); 
let booksReturned = books.filter((book) => book.borrows[0].returned === true); 
result.push(booksCheckOut);
result.push(booksReturned); 
return result;
}


// function partitionBooksByBorrowedStatus(books) {
//   return books.reduce(
//     (partArray, book) => {
//       const { borrows } = book;
//       if (borrows[0].returned) {
//         partArray[1].push(book);
//         return partArray;
//       } else {
//         partArray[0].push(book);
//         return partArray;
//       }
//     },
//     [[], []]
//   );
// }


//////////////////////////////////////////////////////////////////////////////

//should return arry for a book of all borrowers with info and return status
//should limit list to ten borrowers 

//function getBorrowersForBook(book, accounts) {
//   let borrowers = []; 
//   book.forEach((prop) => {
//     if (prop.borrows.filter(key => {
//       key.returned === true 
//       && key.id === accounts.id
//     })
//     )}
// console.log(borrowers)
 //}


// function getBorrowersForBook(book, accounts) {
//   const arry = []; 
//   const {borrows} = book;
//   accounts.forEach((currentAccount) => {
//    borrows.forEach((currentBorrows) => {
//      if (currentAccount.id === currentBorrows.id) {
//        arry.push(currentAccount)
//      }
//    })
//   })
//   arry.forEach((currentArray) => {
//     borrows.forEach((currentBorrows) => {
//       if (currentArray.id === currentBorrows.id) {
//         currentArray.returned = currentBorrows.returned 
//       }
//     })
//   })
//   return arry.slice(0,10)
// }


////////////////////////////////////////////////////////////////////////////////////


// function _findAccountById(accounts,id) {
//   return accounts.find((account) => account.id ===id)
// }


// function getBorrowersForBook(book,accounts) {
//   const {borrows} = book
//   const updatedBorrowsList = borrows.map((borrower) => {
//     const currentAccount = _findAccountById(accounts, borrower.id)
//     if (currentAccount) {
//       delete currentAccount.id;
//       borrower = {...borrower, ...currentAccount};
//       return borrower;
//     } else {
//       return;
//     }
//   })
//   return updatedBorrowsList.slice(0,10)
// }


function getBorrowersForBook(book, accounts) {
  let borrowersBook = book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id)
    return{...borrow, ...account}
  })
  return borrowersBook.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

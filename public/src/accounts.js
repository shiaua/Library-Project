function findAccountById(accounts, id) {
  for (let prop of accounts) {
    //console.log(prop)
    //console.log(prop.id) - listed all id #
    if (prop.id === id)
    return prop
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1)
}
//const sortAccountsByLastName = (accounts) => accounts.sort((a, b) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1)




// function getTotalNumberOfBorrows(account, books) {
//   let counter = 0; 
//   for (let prop of books) {
//     const {borrows} = prop; 
//     for (let key of borrows) {
//       if (key.id === account.id) {
//         counter += 1;
//       }
//     }
//   }
//   return counter 
// }


function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    let count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc +1 : borrowAcc
    }, 0);
    return acc + count
  }, 0)
}



function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = []; 
  books.forEach(prop => {
    if (prop.borrows.find(key => key.id === account.id 
      && !key.returned)) {
        checkedOut.push(prop)
      }
  })
  checkedOut.forEach((prop) => {
    let author = authors.find(key => key.id === prop.authorId)
    prop['author'] = author
  })
  return checkedOut
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

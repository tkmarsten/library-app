const booksList = document.getElementById('allBooks')

const listBooks = (book) => {
  console.log(book)
  const li = document.createElement('li')
  li.setAttribute('key', book.id)
  li.innerHTML = `${book.id}, ${book.title}, ${book.author}`
  booksList.appendChild(li)
}

const getBooks = () => {
  fetch('api/books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => data.forEach((book) => listBooks(book)))
    .catch((error) => {
      console.log('Error: ', error)
    })
}

getBooks()
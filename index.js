const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001
const booksApi = require('./routes/books')
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(booksApi)

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './views/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
const router = require('express').Router()
const { readFromFile } = require('../util/fsUtil')

router.get('/api/books', (req, res) => {

  readFromFile('./db/books.json')
    .then((data) => res.json(JSON.parse(data)))
})

module.exports = router
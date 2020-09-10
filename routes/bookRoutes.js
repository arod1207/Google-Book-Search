const router = require('express').Router();
let Book = require('../models/Books.model');

router.route('/').get((req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const synopsis = req.body.synopsis;

    const newBook = new Book({
        title,
        author,
        synopsis,
    });

    newBook
        .save()
        .then(() => res.json('New Book Added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

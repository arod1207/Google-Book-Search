const router = require('express').Router();
let Book = require('../models/Books.models');

router.route('/').get((req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;

    const newBook = new Book({
        title,
        author,
    });

    newBook
        .save()
        .then(() => res.json('New Book Added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book Removed'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;

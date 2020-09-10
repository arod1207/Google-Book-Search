const router = require('express').Router();
let SavedBook = require('../models/SavedBooks.model');

router.route('/').get((req, res) => {
    SavedBook.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    SavedBook.findByIdAndDelete(req.params.id)
        .then(() => res.json('Book Removed'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

// testing route //

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const synopsis = req.body.synopsis;

    const newBook = new SavedBook({
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

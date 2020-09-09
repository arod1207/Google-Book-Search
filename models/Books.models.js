const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
    },
});

const Books = mongoose.model('Book', bookSchema);

module.exports = Books;

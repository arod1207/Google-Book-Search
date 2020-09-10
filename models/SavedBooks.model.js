const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SavedBooksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    link: { type: String },
    thumbnail: { type: String },
    date: { type: Date, default: Date.now },
});

const SavedBooks = mongoose.model('SavedBooks', SavedBooksSchema);

module.exports = SavedBooks;

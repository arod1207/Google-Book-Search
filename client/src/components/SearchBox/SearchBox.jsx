import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

function SearchBox() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/books')
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const filter = books.filter((book) => {
        return book.title.toLowerCase().includes(search.toLowerCase());
    });

    const results = filter.map((books) => (
        <SearchResults key={books._id} books={books} />
    ));

    return (
        <div className="jumbotron">
            <form>
                <div className="form-group">
                    <label>Search for a book</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            {results}
        </div>
    );
}

export default SearchBox;

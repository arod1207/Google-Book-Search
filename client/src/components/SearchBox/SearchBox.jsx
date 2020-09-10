import React, { useState, useEffect } from 'react';
import googlebooks from 'google-books-search';

import SearchResults from '../SearchResults/SearchResults';

function SearchBox() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        runSearch();
    }, [search]);

    const runSearch = () => {
        googlebooks.search(search, function (error, results) {
            if (!error) {
                setBooks(results);
            } else {
                console.log(error);
            }
        });
    };

    const results = books.map((books) => (
        <SearchResults key={books.id} books={books} />
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
            </form>
            {results}
        </div>
    );
}

export default SearchBox;

import React, { useState, useEffect } from 'react';

function SearchBox() {
    const [book, setBook] = useState('');

    return (
        <div className="jumbotron">
            <form onSubmit>
                <div className="form-group">
                    <label>Search for a book</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setBook(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SearchBox;

import React from 'react';

function SearchBox() {
    return (
        <div>
            <div class="jumbotron">
                <h5 class="display-6">Book Search</h5>
                <input
                    type="text"
                    // value="book-search"
                    placeholder="search"
                ></input>
                <button className="btn btn-primary m-2">Search</button>
            </div>
        </div>
    );
}

export default SearchBox;

import React from 'react';

function SearchResults(props) {
    return (
        <div>
            <ul>
                <li>
                    <h2>{props.books.title}</h2>
                    <h4>{props.books.author}</h4>
                    <p>{props.books.synopsis}</p>
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;

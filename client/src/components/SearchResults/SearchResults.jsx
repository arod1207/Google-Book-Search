import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchResults(props) {
    function saveBook() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/saved/add',
            data: {
                id: props.books._id,
                title: props.books.title,
                author: props.books.author,
                synopsis: props.books.synopsis,
            },
        });
    }

    return (
        <div>
            <ul>
                <li>
                    <h2>{props.books.title}</h2>
                    <h4>{props.books.author}</h4>
                    <p>{props.books.synopsis}</p>
                    <button>View</button>
                    <button onClick={saveBook}>Save</button>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;

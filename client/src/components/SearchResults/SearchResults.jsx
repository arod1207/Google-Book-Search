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
                authors: props.books.authors,
                description: props.books.description,
                link: props.books.link,
                thumbnail: props.books.thumbnail,
            },
        });
    }

    return (
        <div>
            <ul>
                <li>
                    <h2>{props.books.title}</h2>
                    <h4>{props.books.authors}</h4>
                    <p>{props.books.description}</p>
                    <img src={props.books.thumbnail} alt="" />
                    <button type="button">
                        <a href={props.books.link}>View</a>
                    </button>
                    <button onClick={saveBook}>Save</button>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;

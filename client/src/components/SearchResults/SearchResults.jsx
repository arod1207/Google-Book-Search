import React, { useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';

import './SearchResults.css';

function SearchResults(props) {
    function saveBook() {
        axios({
            method: 'post',
            url: 'http://localhost:3001/saved/add',
            data: {
                title: props.books.title,
                authors: props.books.authors[0],
                description: props.books.description,
                link: props.books.link,
                thumbnail: props.books.thumbnail,
            },
        });
    }

    const alert = () => {
        Swal.fire({
            title: 'Success',
            text: 'Your book was saved!',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000,
        });
    };

    return (
        <div>
            <ul>
                <li>
                    <h2>{props.books.title}</h2>
                    <h4>{props.books.authors}</h4>
                    <p>{props.books.description}</p>
                    <img src={props.books.thumbnail} alt="" />
                    <button className="btn btn-primary m-4" type="button">
                        <a style={{ color: 'white' }} href={props.books.link}>
                            View Book
                        </a>
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            saveBook();
                            alert();
                        }}
                    >
                        Save
                    </button>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;

import React from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';

import './SearchResults.css';

function SearchResults(props) {
    function saveBook() {
        axios({
            method: 'post',
            url: '/saved/add',
            data: {
                title: props.books.title,
                authors: props.books.authors[0],
                description: props.books.description,
                link: props.books.link,
                thumbnail: props.books.thumbnail,
            },
        });
        console.log('book added');
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
                    <h2 className="title">{props.books.title}</h2>
                    <h4 className="author">{props.books.authors}</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={props.books.thumbnail} alt="" />
                            </div>
                            <div className="col-md-10">
                                <p>{props.books.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-primary m-4" type="button">
                            <a
                                style={{ color: 'white' }}
                                href={props.books.link}
                                target="_blank"
                            >
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
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;

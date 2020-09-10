import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './SavedPage.css';
import Swal from 'sweetalert2';

function SavedPage() {
    const [SavedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        axios
            .get('/saved')
            .then((res) => {
                setSavedBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function removeBook(id) {
        axios
            .delete(`/saved/${id}`)
            .then(() => {
                return axios.get(`/saved`);
            })
            .then((res) => {
                setSavedBooks(res.data);
            });
    }

    const alert = () => {
        Swal.fire({
            title: 'Success',
            text: 'Your book was Removed!',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 3000,
        });
    };

    return (
        <div className="jumbotron">
            {SavedBooks.map((books) => {
                return (
                    <div>
                        <ul>
                            <li key={books._id}>
                                <h2 className="title">{books.title}</h2>
                                <h4 className="author">{books.authors}</h4>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={books.thumbnail} alt="" />
                                        </div>
                                        <div className="col-md-10">
                                            <p>{books.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button
                                        className="btn btn-primary m-4"
                                        type="button"
                                    >
                                        <a
                                            style={{ color: 'white' }}
                                            href={books.link}
                                        >
                                            Buy Now
                                        </a>
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            removeBook(books._id);
                                            alert();
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <hr />
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default SavedPage;

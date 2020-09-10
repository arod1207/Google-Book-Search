import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';

function SavedPage() {
    const [SavedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/saved')
            .then((res) => {
                setSavedBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function removeBook(id) {
        axios
            .delete(`http://localhost:3001/saved/${id}`)
            .then(() => {
                return axios.get(`http://localhost:3001/saved`);
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
                    <div key={books._id}>
                        <ul>
                            <li>
                                <h2>{books.title}</h2>
                                <h4>{books.authors}</h4>
                                <p>{books.description}</p>
                                <img src={books.thumbnail} alt="" />
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        // Issue DELETE request
        axios
            .delete(`http://localhost:3001/saved/${id}`)
            .then(() => {
                // Issue GET request after item deleted to get updated list
                // that excludes user of id
                return axios.get(`http://localhost:3001/saved`);
            })
            .then((res) => {
                setSavedBooks(res.data);
            });
    }

    return (
        <div className="jumbotron">
            {SavedBooks.map((books) => {
                return (
                    <div key={books._id}>
                        <ul>
                            <li>
                                <h2>{books.title}</h2>
                                ate <h4>{books.authors}</h4>
                                <p>{books.description}</p>
                                <img src={books.thumbnail} alt="" />
                                <button
                                    className="btn btn-primary m-4"
                                    type="button"
                                >
                                    <a href={books.link}>Buy Now</a>
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeBook(books._id)}
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

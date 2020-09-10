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

    const removeBook = (id) => {
        axios.delete(`http://localhost:3001/saved/${id}`).then((res) => {});
    };

    return (
        <div className="jumbotron">
            {SavedBooks.map((books) => {
                return (
                    <div key={books._id}>
                        <ul>
                            <li>
                                <h2>{books.title}</h2>
                                <h4>{books.author}</h4>
                                <p>{books.synopsis}</p>
                                <button>View</button>
                                <button onClick={removeBook}>Remove</button>
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

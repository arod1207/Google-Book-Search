import React from 'react';
import axios from 'axios';

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

    return (
        <div>
            <ul>
                <li>
                    <h2>{props.books.title}</h2>
                    <h4>{props.books.authors}</h4>
                    <p>{props.books.description}</p>
                    <img src={props.books.thumbnail} alt="" />
                    <button className="btn btn-primary m-4" type="button">
                        <a href={props.books.link}>View Book</a>
                    </button>
                    <button className="btn btn-primary" onClick={saveBook}>
                        Save
                    </button>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default SearchResults;

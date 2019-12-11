import React, { Component } from "react";
import axios from "axios";

class Save extends Component {

    saveBook = (book) => {
        
        var dbBook = {
            title: book.title,
            authors: book.authors,
            synopsis: book.synopsis,
            image: book.image,
            url: book.url
        };

        axios.post("/api/books", dbBook)
            .then(() => {
                console.log(`${book.title} added to your library`);
                alert(`You saved ${book.title} by ${book.authors.join(", ")}.`)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button class="btn-primary"
                        onClick={() => this.saveBook(this.props)}>
                            SAVE
                </button>
            </div>
        );
    }
}

export default Save;
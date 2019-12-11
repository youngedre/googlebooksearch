import React, { Component } from "react";
import axios from "axios";
import Column from "../components/Column";
import Row from '../components/Row';
import Container from '../components/Container';
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import List from "../components/List";
import Book from "../components/Book";
import Save from "../components/Save";

class Search extends Component {

    state = {
    results: [],
    query: "",
    books: []
    };

    showResults = data => {
        this.setState({
            books: data
        })
    }

    searchBooks = () => {
        let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
        axios.get(queryUrl)
            .then(res => {
                const validArr = res.data.items.filter(result => 
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail);
                    this.setState({
                        books: validArr
                    })
                    this.showResults(validArr);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
      };

    render() {
        return (
            <Container>
                <Jumbotron />
                <Row id="search-row">
                    <Column size="md-12">
                        <Card title="Book Search" icon="book-open">
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                query={this.state.query}
                            />
                        </Card>
                    </Column>
                </Row>
                <Row>
                    <Column size="md-12" className="results-column">
                        <div>
                            {(this.state.books && this.state.books.length > 0) ? (
                            <List>
                                {this.state.books.map(book => {
                                    return (
                                        <div key={book.id}>
                                            <Book
                                                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Information"]}
                                                title={book.volumeInfo.title}
                                                synopsis={book.volumeInfo.description ? book.volumeInfo.description : "No Synopsis Available"}
                                                url={book.volumeInfo.infoLink}
                                                image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}>
                                                <Save
                                                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Information"]}
                                                    title={book.volumeInfo.title}
                                                    synopsis={book.volumeInfo.description ? book.volumeInfo.description : "No Synopsis Available"}
                                                    url={book.volumeInfo.infoLink}
                                                    image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"} />
                                            </Book>
                                        </div>
                                    )
                                })}
                            </List>
                            ) : (
                                <h3>No Books To Display. Enter Your Search Above.</h3>
                            )}   
                        </div>
                    </Column>
                </Row>
            </Container>
        );
    }
}

export default Search;
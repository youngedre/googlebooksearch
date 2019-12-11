import React, { Component } from "react";
import API from "../utils/API";
import Column from "../components/Column";
import Row from '../components/Row';
import Container from '../components/Container';
import Jumbotron from "../components/Jumbotron";
import List from "../components/List";
import Book from "../components/Book";
import Delete from "../components/Delete";

class Saved extends Component {
    state = {
        saved: []
    };

    componentDidMount() {
        this.loadSaved();
    }

    loadSaved = () => {
        API.getAllSaved()
            .then(res => {
                this.setState({ 
                    saved: res.data
                })
            })
             .catch(err => console.log(err));
    }

    removeSaved = book => {

        let id = book._id;

        API.removeSaved(id)
            .then(() => {
                console.log(`${id} deleted from DB`);
                alert(`${book.title} by ${book.authors} removed from saved books`);
                this.loadSaved();
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Container>
                    <Jumbotron />
                    <Row>
                        <div className="card text-center">
                            <div className="card-body bg-dark">
                                <h3 className="header" id="saved">
                                    Saved Books
                                </h3>
                            </div>
                        </div>
                        <Column size="md-12">
                            {this.state.saved.length ? (
                                <List>
                                    {this.state.saved.map(book => (
                                        <Book
                                            key={book._id}
                                            authors={book.authors ? book.authors : ["No Author Information"]}
                                            title={book.title}
                                            synopsis={book.synopsis ? book.synopsis : "No Synopsis Available"}
                                            url={book.url}
                                            image={book.image ? book.image : "#"}>
                                            <Delete
                                                authors={book.authors ? book.authors : ["No Author Information"]}
                                                title={book.title}
                                                synopsis={book.synopsis ? book.synopsis : "No Synopsis Available"}
                                                url={book.url}
                                                image={book.image ? book.image : "#"} 
                                                id={book._id} 
                                                onClick={() => this.removeSaved(book)} />
                                        </Book>
                                    ))}
                                </List>
                            ) : (
                            <div className="card text-center">
                                <div className="card-body bg-dark">
                                    <h3 className="header" id="saved">Loading Saved Books</h3>
                                </div>
                            </div>
                            )}
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Saved;
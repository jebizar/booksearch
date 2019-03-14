import React, { Component } from "react";
import Container from "../components/container";
import Header from "../components/header";
import Search from "../components/search";
import Results from "../components/results";
import API from "../utils/API";

class Books extends Component {
    state = {
        books:[],
        search:""
    }

    searchBooks = query => {
        API.searchBooks(query)
          .then(res =>
            this.setState(
              {
                books: res.data.items,
              },
              console.log(res.data.items)
            )
          )
          .catch(err => console.log(err));
      };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
    e.preventDefault();
    this.searchBooks(this.state.search);
  };

  saves = book => {
    console.log(book);
    API.saves(book)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };
    render(){
        return(
            <Container>
                <Header/>
                <Search handleInputChange={this.handleInputChange} handleFormSubmit = {this.handleFormSubmit} value = {this.state.search}/>
                <ul>
                {this.state.books.map(book => (
                    <Results
                      key={book.id}
                      title={book.volumeInfo.title}
                      link={book.volumeInfo.infoLink}
                      author={book.volumeInfo.authors.join(", ")}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      save = {() => this.saves({
                        title:book.volumeInfo.title,
                        link:book.volumeInfo.infoLink,
                        author:book.volumeInfo.authors.join(", "),
                        image:book.volumeInfo.imageLinks.thumbnail,
                      })}
                    />
                  ))}
                </ul>
            </Container>
        )}
}

export default Books;
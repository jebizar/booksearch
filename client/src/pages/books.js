import React, { Component } from "react";
import Container from "../components/container";
import Header from "../components/header";
import Search from "../components/search";
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
                search: ""
              },
              console.log(res.data.items)
            )
          )
          .catch(err => console.log(err));
      };

    handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
    e.preventDefault();
    this.searchBooks(this.state.search);
  };
    render(){
        return(
            <Container>
                <Header/>
                <Search handleInputChange={this.handleInputChange} handleFormSubmit = {this.handleFormSubmit} value = {this.state.search}/>
            </Container>
        )}
}

export default Books;
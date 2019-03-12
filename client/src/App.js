import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Books from "./pages/books";

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Books}/>
      </Router>
    )
  }
}

export default App;

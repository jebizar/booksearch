import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Books from "./pages/books";

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Books}/>
        </Switch>
      </Router>
    )
}

export default App;

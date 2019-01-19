import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coins/:name" component={Coin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

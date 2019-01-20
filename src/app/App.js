import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Coin from "./pages/Coin";
import routes from "./routes";
import NavigationBar from "./components/Navbar/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <NavigationBar />
            <Switch>
              <Route exact path={routes.home.route} component={routes.home.component} />
              <Route exact path="/coins/:name" component={Coin} />
              <Route exact path={routes.about.route} component={routes.about.component} />
              <Route exact path={routes.statistics.route} component={routes.statistics.component} />
              <Route exact path={routes.global.route} component={routes.global.component} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

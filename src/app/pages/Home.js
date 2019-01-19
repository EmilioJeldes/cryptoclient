import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllCoins } from "../redux/actions/coinActions";
import Navbar from "../components/Navbar/Navbar";
import CoinsTable from "../components/CoinsTable/CoinsTable";

class Home extends Component {
  componentWillMount() {
    this.props.fetchAllCoins();
  }

  render() {
    return (
      <div>
        <Navbar />
        <CoinsTable match={this.props.match} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchAllCoins }
)(Home);
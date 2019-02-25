import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCoinsByPage, fetchCoinsTotalCount } from "../redux/actions/coinActions";
import CoinsTable from "../components/CoinsTable/CoinsTable";

class Home extends Component {
  componentDidMount() {
    const {
      pager: { selectedPage, size },
      fetchCoinsByPage,
      fetchCoinsTotalCount
    } = this.props;

    fetchCoinsTotalCount().then(() => fetchCoinsByPage(selectedPage, size));
  }

  render() {
    return (
      <div>
        <CoinsTable match={this.props.match} />
      </div>
    );
  }
}

const mapStateToProps = ({ pager }) => {
  return { pager };
};

export default connect(
  mapStateToProps,
  { fetchCoinsByPage, fetchCoinsTotalCount }
)(Home);

import React, { Component } from "react";
import { connect } from "react-redux";

// import styles from "./CoinsTable.module.scss";
import TableRowLink from "../TableRowLink/TableRowLink";

class CoinsTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>icon</th>
              <th>Score</th>
              <th>Price</th>
              <th>Ranking</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.coins.allIds.map(name => {
              return <TableRowLink key={name} coin={this.props.coins.byId[name]} name={name} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { coins: state.entities.coins };
};

export default connect(mapStateToProps)(CoinsTable);

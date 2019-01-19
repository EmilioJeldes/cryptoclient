import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "./TableRowLink.module.scss";
import * as PropTypes from "prop-types";

const TableRowLink = class TableRowLink extends Component {
  handleClick = () => {
    this.props.history.push("/coins/" + this.props.coin.name);
  };

  render() {
    return (
      <tr className={styles.tableRow} onClick={this.handleClick}>
        <td>{this.props.coin.name}</td>
        <td>
          <img style={{ maxWidth: "16px" }} src={this.props.coin.icon} alt={"icon thumbnail for" + this.props.name} />
        </td>
        <td>{this.props.coin.score}</td>
        <td>{this.props.coin.price}</td>
        <td>{this.props.coin.ranking}</td>
        <td>{this.props.coin.profit}</td>
      </tr>
    );
  }
};

TableRowLink.propTypes = {
  coin: PropTypes.any,
  name: PropTypes.any
};

export default withRouter(TableRowLink);

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "./TableRowLink.module.scss";
import * as PropTypes from "prop-types";
import { devProfile } from "../../../helpers/globals";

const TableRowLink = class TableRowLink extends Component {
  handleClick = () => {
    this.props.history.push("/coins/" + this.props.coin.name);
  };

  render() {
    return (
      <tr className={styles.tableRow} onClick={this.handleClick}>
        <td>{this.props.coin.ranking}</td>
        <td>
          {this.props.coin.name}
          <img
            style={{ maxWidth: "16px" }}
            src={devProfile + this.props.coin.icon}
            alt={"icon thumbnail for" + this.props.name}
          />
        </td>
        <td>{this.props.coin.score.toFixed(5)}</td>
        <td>{this.props.coin.price.toFixed(5)}</td>
        <td>{this.props.coin.profit.toFixed(5)}</td>
        <td>
          <img src={"https://ejeldes.cl/app/static/img/charts/testChart.png"} alt="chart" />
        </td>
      </tr>
    );
  }
};

TableRowLink.propTypes = {
  coin: PropTypes.any,
  name: PropTypes.any
};

export default withRouter(TableRowLink);

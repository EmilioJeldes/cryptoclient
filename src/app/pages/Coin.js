import React from "react";
import { connect } from "react-redux";
import { selectCoin } from "../redux/reducers/coinsReducer";

const Coin = props => {
  return (
    <div>
      <center>
        <h1>{props.coin.name}</h1>
        <h5>Ranking {props.coin.ranking}</h5>
        <h5>Profit {props.coin.profit}</h5>
        <h5>Price {props.coin.price}</h5>
      </center>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { coin: selectCoin(state, props.match.params["name"]) };
};

export default connect(mapStateToProps)(Coin);

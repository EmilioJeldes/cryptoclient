import React from "react";
import { connect } from "react-redux";

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
  console.log(props.match.params);
  return { coin: state.entities.coins.byId[props.match.params.name] };
};

export default connect(mapStateToProps)(Coin);

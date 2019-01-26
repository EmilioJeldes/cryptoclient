import React, { Component } from "react";
import { connect } from "react-redux";

// import styles from "./CoinsTable.module.scss";
import TableRowLink from "../TableRowLink/TableRowLink";
import Table from "reactstrap/es/Table";
import Container from "../Container/Container";
import { BeatLoader } from "react-spinners";

class CoinsTable extends Component {
  render() {
    const {
      coins: { allIds, byId, loading }
    } = this.props;
    return (
      <Container>
        {loading.isLoading ? (
          <BeatLoader margin={"35vh 0 0 0"}/>
        ) : (
          <Table>
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
              {allIds.map(name => {
                return <TableRowLink key={name} coin={byId[name]} name={name} />;
              })}
            </tbody>
          </Table>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { coins: state.entities.coins };
};

// export default connect(mapStateToProps)(CoinsTable);
export default connect(mapStateToProps)(CoinsTable);

import React, { Component } from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import Navbar from "reactstrap/es/Navbar";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import NavbarToggler from "reactstrap/es/NavbarToggler";
import Collapse from "reactstrap/es/Collapse";
import Nav from "reactstrap/es/Nav";
import NavbarLink from "../NavbarItem/NavbarLink";
import NavbarSearchBar from "../NavbarSearchBar/NavbarSearchBar";

import { routes } from "../../routes";

class NavigationBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () =>
    this.setState((state, props) => {
      return {
        isOpen: !state.isOpen
      };
    });

  render() {
    const { home, about, global, statistics } = routes;
    return (
      <Navbar color="light" light expand="md" fixed="top">
        {console.log("RENDER NAV")}
        <Container>
          <NavbarBrand tag={Link} to={"/"}>
            CryptoStatistics
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavbarSearchBar placeholder="Search ..." />
              <NavbarLink to={home.route} content={home.content} />
              <NavbarLink to={about.route} content={about.content} />
              <NavbarLink to={statistics.route} content={statistics.content} />
              <NavbarLink to={global.route} content={global.content} />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;

import NavItem from "reactstrap/es/NavItem";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import NavLink from "reactstrap/es/NavLink";

const NavbarLink = props => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.to}>
        {props.content}
      </NavLink>
    </NavItem>
  );
};

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default NavbarLink;

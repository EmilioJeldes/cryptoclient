import React from "react";
import PropTypes from "prop-types";
import NavItem from "reactstrap/es/NavItem";
import Form from "reactstrap/es/Form";
import Input from "reactstrap/es/Input";

import styles from "./NavbarSearchBar.module.scss"

const NavbarSearchBar = props => {
  return (
    <NavItem>
      <Form>
        <Input placeholder={props.placeholder} className={styles.searchbar} />
      </Form>
    </NavItem>
  );
};

NavbarSearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default NavbarSearchBar;

import React from "react";
import StrapContainer from "reactstrap/es/Container";

import styles from "./Container.module.scss";

const Container = props => {
  return <StrapContainer className={styles.container} fluid>{props.children}</StrapContainer>;
};

export default Container;

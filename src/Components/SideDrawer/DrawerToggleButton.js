import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
  <button className="toggle__button" onClick={props.click}>
    <div className="toggle__button__line" />
    <div className="toggle__button__line" />
    <div className="toggle__button__line" />
  </button>
);

export default drawerToggleButton;

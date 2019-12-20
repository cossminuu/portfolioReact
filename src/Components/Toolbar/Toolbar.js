import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-scroll";
import data from "../../data";

const toolbar = props => {
  return (
    <header className="toolbar  sticky">
      <nav className="toolbar__navigation ">
        <div className="toolbar__toggle__button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      </nav>
    </header>
  );
};

export default toolbar;

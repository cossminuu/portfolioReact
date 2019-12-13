import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-scroll";
import data from "../../data";

const toolbar = props => (
  <header className="toolbar  sticky">
    <nav className="toolbar__navigation ">
      <div className="toolbar__toggle__button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__navigation__items">
        <ul>
          {data.toolbar.map(toolbars => {
            return (
              <li key={toolbars.link}>
                <Link
                  to={toolbars.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  activeClass="active"
                  className="hover__effect"
                >
                  {toolbars.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;

import React from "react";
import { Link } from "react-scroll";
import data from "../../data";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side__drawer";
  if (props.show) {
    drawerClasses = "side__drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="closeMenu">
        <p onClick={props.click}>x</p>
      </div>
      <ul>
        {data.toolbar.map((toolbars, index) => {
          return (
            <li key={index}>
              <Link
                to={toolbars.to}
                spy={true}
                smooth={true}
                offset={17}
                duration={1000}
                activeClass="active-mobile"
                className="hover__effect"
                onClick={props.click}
              >
                {toolbars.link}
              </Link>
            </li>
          );
        })}
        <div className="social pt-5">
          <a href="# " className="fa fa-facebook pr-4">
            {" "}
          </a>
          <a href="# " className="fa fa-twitter pr-4">
            {" "}
          </a>
          <a href="# " className="fa fa-github pr-4">
            {" "}
          </a>
          <a href="# " className="fa fa-dribbble">
            {" "}
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default sideDrawer;

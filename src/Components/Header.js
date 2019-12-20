import React from "react";
import Fade from "react-reveal/Fade";
import avatar from "../img/Risorsa3.png";
import data from "../data";
function Header(props) {
  const contact = data.contacts.map(contact => {
    return (
      <li key={contact.text}>
        <i className={contact.class}> </i>
        <a> {contact.text} </a>
      </li>
    );
  });

  const social = data.socials.map(social => {
    return (
      <a href="#fake" key={social}>
        <i className={social}> </i>
      </a>
    );
  });

  return (
    <React.Fragment>
      <section id="home" className=" image-bg">
        <div className="grid-container-header overlay-header">
          <Fade left>
            <div className="item1">
              <div className="header-info">
                <div className="btn"> Hello i 'm</div>
                <h2> {props.name} </h2>
                <h4> {props.job} </h4>
                <ul> {contact} </ul>
                <ul className="social-icons"> {social} </ul>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="item2">
              <img className="img-fluid" src={avatar} alt="" />
            </div>
          </Fade>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;

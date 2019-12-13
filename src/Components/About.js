import React from "react";
import data from "../data";
import illustration from "../img/undraw_web_developer_p3e51.png";
import htmllogo from "../img/logohtml.png";
import wordpresslogo from "../img/wordpresslogo.png";
import phplogo from "../img/phplogo.png";
import csslogo from "../img/csslogo.png";
import reactlogo from "../img/reactlogo.png";
import javascriptlogo from "../img/javascriptlogo.jpg";
import illustratorlogo from "../img/illustratorlogo.png";
import figmalogo from "../img/figmalogo.png";
import Fade from "react-reveal/Fade";

function About() {
  const skill = data.skills.map(skill => {
    return (
      <li>
        <span className="mr-2">{skill}</span>
      </li>
    );
  });
  return (
    <React.Fragment>
      <section id="about" className="separator-bottom grid-container-about">
        <div className="item-about-1">
          <Fade right>
            <img className="img-fluid" src={illustration} alt="" />
          </Fade>
        </div>
        <div className="item-about-2">
          <div className="about">
            <Fade left>
              <h2>
                <span className="highlightBlack">About me</span>
              </h2>
              <p>{data.description}</p>
              <div className="about-tag">
                <ul>{skill}</ul>
              </div>
              <a className="btn">
                Download CV<i className="fa fa-download"></i>
              </a>
            </Fade>
          </div>
        </div>
        <h2 className="pt-5 pb-5 text-center title">
          <span className="highlightBlack">My skills</span>
        </h2>

        <div className="item-about-3">
          <Fade left>
            <div className="graph-cont">
              <div className="name pb-2">
                <img src={htmllogo} alt="" />
                <p>HTML</p>
              </div>
              <div className="bar bar1">90%</div>

              <div className="name pb-2">
                <img src={csslogo} alt="" />
                <p>CSS</p>
              </div>
              <div className="bar bar4">90%</div>

              <div className="name pb-2">
                <img src={wordpresslogo} alt="" />
                <p>WordPress</p>
              </div>
              <div className="bar bar2 ">80%</div>

              <div className="name pb-2">
                <img src={figmalogo} alt="" />
                <p>Figma</p>
              </div>
              <div className="bar bar8 ">80%</div>
            </div>
          </Fade>
        </div>
        <div className="item-about-4">
          <Fade right>
            <div className="graph-cont">
              <div className="name pb-2">
                <img src={illustratorlogo} alt="" />
                <p>Illustrator</p>
              </div>
              <div className="bar bar7 ">70%</div>

              <div className="name pb-2">
                <img src={reactlogo} alt="" />
                <p>React</p>
              </div>
              <div className="bar bar5 ">60%</div>

              <div className="name pb-2">
                <img src={javascriptlogo} alt="" />
                <p>Javascript</p>
              </div>
              <div className="bar bar6">60%</div>

              <div className="name pb-2">
                <img src={phplogo} alt="" />
                <p>Php</p>
              </div>
              <div className="bar bar3 ">50%</div>
            </div>
          </Fade>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;

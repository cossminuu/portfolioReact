import React from "react";
import data from "../data";
import Zoom from "react-reveal/Zoom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import portfolio from "../img/project/portfolio.jpg";
// import portfolio2 from "../img/project/portfolio2.jpg";
// import portfolio3 from "../img/project/portfolio3.jpg";
// import portfolio4 from "../img/project/portfolio4.jpg";
// import portfolio5 from "../img/project/portfolio5.jpg";
// import portfolio6 from "../img/project/portfolio6.jpg";

function Portfolio(props) {
  const cards = data.portfolio.map(card => {
    return (
      <Zoom down>
        <div onClick={props.click} className="hovereffect">
          <img className="img-fluid" src={card.image} alt="" />
          <div className="overlay2">
            <h2>{card.projectName}</h2>

            <p>
              <a href="#ex2">Click to see more</a>
            </p>
          </div>
        </div>
      </Zoom>
    );
  });
  return (
    <React.Fragment>
      <section id="portfolio" className="background-portfolio">
        <div className="grid-container-portfolio">
          <h2 className="text-center title-portfolio">
            <span className="highlightBlack">Projects</span>
          </h2>
          {cards}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;

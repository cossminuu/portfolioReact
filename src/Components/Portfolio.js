import React from "react";
import data from "../data";
import Zoom from "react-reveal/Zoom";

function Portfolio(props) {
  const cards = data.portfolio.map((card, i) => {
    return (
      <Zoom>
        <div onClick={() => props.click(i)} className="hovereffect">
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

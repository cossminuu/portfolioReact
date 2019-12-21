import React from "react";
import data from "../data";
import Zoom from "react-reveal/Zoom";

function Portfolio(props) {
  const cards = data.portfolio.map((card, i) => {
    return (
      <Zoom>
        <div onClick={() => props.click(i)} className="card">
          <h2>{card.projectName}</h2>
          <h1 className="text">Read More</h1>
          <img src={card.image} alt="Sample photo" />
        </div>
      </Zoom>
    );
  });
  return (
    <React.Fragment>
      <section id="portfolio" className="background-portfolio pt-5">
        <h2 className="text-center title-portfolio">
          <span className="highlightBlack">Projects</span>
        </h2>
        <main class="grid-portfolio">{cards}</main>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;

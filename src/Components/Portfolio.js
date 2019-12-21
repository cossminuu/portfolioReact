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
      <section id="portfolio" className="background-portfolio pt-5">
        <h2 className="text-center title-portfolio">
          <span className="highlightBlack">Projects</span>
        </h2>
        <main class="grid-portfolio">
          <div className="card">
            <h2>Hello World</h2>
            <h1 className="text">Read More</h1>
            <img src="https://picsum.photos/1200" alt="Sample photo" />
          </div>

          <div className="card">
            <h2>Hello World</h2>
            <h1 className="text">Read More</h1>
            <img src="https://picsum.photos/800" alt="Sample photo" />
          </div>

          <div className="card">
            <h2>Hello World</h2>
            <h1 className="text">Read More</h1>
            <img src="https://picsum.photos/1200" alt="Sample photo" />
          </div>

          <div className="card">
            <h2>Hello World</h2>
            <h1 className="text">Read More</h1>
            <img src="https://picsum.photos/800" alt="Sample photo" />
          </div>

          <div className="card">
            <h2>Hello World</h2>
            <h1 className="text">Read More</h1>
            <img src="https://picsum.photos/600" alt="Sample photo" />
          </div>

          <div className="card">
            <h2>Hello World</h2>
            <h1 className="text">Read More</h1>
            <img src="https://picsum.photos/1200" alt="Sample photo" />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;

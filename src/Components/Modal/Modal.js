import React from "react";
import "./Modal.css";
import Zoom from "react-reveal/Zoom";

const modal = props => {
  return (
    <div className="container-modal">
      <Zoom down>
        <section className="Modal">
          <div className="closeModal">
            <div onClick={props.close} className="closeIt">
              <p>x</p>
            </div>
          </div>
          <div className="container-fluid pt-5 p-5">
            <div className="row">
              <div className="col-md-5 text-white">
                <h1 className="pb-3">Project React</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Quidem
                  quasi optio ea officia doloribus sit at quae
                  consequatur.Consectetur id autem necessitatibus ut similique
                  repellendus repudiandae delectus quaerat deserunt!Sequi eos
                  perspiciatis recusandae obcaecati tempore iusto nostrum odit
                  quos quaerat!Odit consequuntur ea magni delectus velit
                  molestias.Harum, doloremque quasi.Lorem ipsum dolor sit amet
                </p>
                <div className="about-tag pt-2">
                  <ul>
                    <li>
                      <span> php </span>
                    </li>
                    <li>
                      <span> html </span>
                    </li>
                    <li>
                      <span> css </span>
                    </li>
                    <li>
                      <span> php </span>
                    </li>
                    <li>
                      <span> WordPress </span>
                    </li>
                    <li>
                      <span> React </span>
                    </li>
                    <li>
                      <span> Javascript </span>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-success mb-4" href="#">
                  Open
                </a>
              </div>
              <div className="col-md-7 ">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  alt=""
                />
                <img
                  className="img-fluid "
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </Zoom>
    </div>
  );
};

export default modal;

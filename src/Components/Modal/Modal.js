import React from "react";
import "./Modal.css";
import Zoom from "react-reveal/Zoom";

const modal = props => {
  return (
    <div className="container-modal">
      <Zoom>
        <section className="Modal">
          <div className="closeModal">
            <div onClick={props.close} className="closeIt">
              <p>x</p>
            </div>
          </div>
          <div className="container-fluid pt-5 p-5">
            <div className="row">
              <div className="col-md-5 text-white">
                <h1 className="pb-3">{props.project.projectName}</h1>
                <p>{props.project.description}</p>
                <div className="about-tag pt-2">
                  <ul>
                    {props.project.usedSkills.map(skill => {
                      return (
                        <li>
                          <span>{skill}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <a
                  className="btn mb-4"
                  href={props.project.url}
                  target="_blank"
                >
                  Open
                </a>
              </div>
              <div className="col-md-7 ">
                <img className="img-fluid" src={props.project.image} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Zoom>
    </div>
  );
};

export default modal;

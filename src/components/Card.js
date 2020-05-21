import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import Flip from "react-reveal/Flip";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { DiNetbeans } from "react-icons/di";
import { FaNode } from "react-icons/fa";

import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ category, purpose, title, link, language, env, when }) => {
  const linkStyle = {
    color: "darkgrey",
  };
  return (
    <div>
      <Flip top cascade>
        <div className="card weather-card">
          <div className="card-body pb-3">
            <h4 className="card-title font-weight-bold">{purpose}</h4>
            <p className="card-text">Purpose: {category} </p>
            <FontAwesomeIcon icon={faHome} />
            <div className="d-flex justify-content-between">
              <p className="display-4">{title}</p>
              <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <p> </p>
              <p></p>
            </div>
            <div className="progress md-progress">
              <div
                className="progress-bar black"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <ul className="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
              <li className="pl-4"></li>
              <li>
                {language} {language.includes("Java") && <FaJava />}{" "}
                {language.includes("React") && <FaJsSquare />}{" "}
              </li>
              <li className="pr-4">
                {env}
                {env.includes("Node") && <FaNode />}
                {language.includes("Java") && <DiNetbeans />}
              </li>
              <li className="pr-4">
                {when}
                {when.includes("Fall") && <FontAwesomeIcon icon={faSun} />}
                {when.includes("Summer")}
              </li>
            </ul>
            <div style={linkStyle}>{link}</div>
          </div>
        </div>{" "}
      </Flip>
    </div>
  );
};

export default Card;

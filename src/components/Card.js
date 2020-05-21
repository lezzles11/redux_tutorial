import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import Flip from "react-reveal/Flip";
const Card = ({
  category,
  purpose,
  title,
  link,
  tech1,
  tech2,
  tech3,
  icon1,
  icon2,
}) => {
  const linkStyle = {
    color: "darkgrey",
  };
  return (
    <div>
      <Flip top cascade>
        <div className="card weather-card">
          <div className="card-body pb-3">
            <h4 className="card-title font-weight-bold">{category}</h4>
            <p className="card-text">Purpose: {purpose} </p>
            <div className="d-flex justify-content-between">
              <p className="display-4">{title}</p>
              <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <p>
                <i className={icon1}></i>
              </p>
              <p>
                <i className={icon2}></i>
              </p>
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
              <li>{tech1}</li>
              <li className="pr-4">{tech2}</li>
              <li className="pr-4">{tech3}</li>
            </ul>
            <div style={linkStyle}>
              <MDBNavLink to={link}>Read about the process!</MDBNavLink>
            </div>
          </div>
        </div>{" "}
      </Flip>
    </div>
  );
};

export default Card;

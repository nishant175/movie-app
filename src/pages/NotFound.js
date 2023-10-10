import {
  faFaceFrown,
  faFaceFrownOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center row">
        <div className=" col-md-6">
          <FontAwesomeIcon
            icon={faFaceFrown}
            style={{
              fontSize: "250px",
            }}
          />
        </div>
        <div className=" col-md-6 mt-5">
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to={"/"} className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

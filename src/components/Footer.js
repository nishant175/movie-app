import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

const Footer = () => {
  const [cookies, setCookie] = useCookies();
  const nightMode = cookies.nightMode;
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img src={logo} height={100} width={140} />
          </a>
          <p className="">© 2022</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                to=""
                className={`nav-link p-0 ${!nightMode ? "text-muted" : ""}`}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                to=""
                className={`nav-link p-0 ${!nightMode ? "text-muted" : ""}`}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                to=""
                className={`nav-link p-0 ${!nightMode ? "text-muted" : ""}`}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

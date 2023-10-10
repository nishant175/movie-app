import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Search from "./search/Search";
import NightmodeBtn from "./NightmodeBtn";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie] = useCookies();
  const nightMode = cookies.nightMode;
  return (
    <Navbar
      bg={`${nightMode ? "dark" : ""}`}
      data-bs-theme={`${nightMode ? "dark" : ""}`}
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Picturewale</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks />
        </Navbar.Collapse>
        <Search />
        <NightmodeBtn />
      </Container>
    </Navbar>
  );
};

export default Header;

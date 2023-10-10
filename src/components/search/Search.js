import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";

const Search = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span className="btn btn-outline-secondary" onClick={handleShow}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <SearchModal show={show} onHide={handleClose} />
    </>
  );
};

export default Search;

import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SearchResults from "./SearchResults";
import { useCookies } from "react-cookie";

const SearchModal = (props) => {
  const [cookies, setCookie] = useCookies();
  const nightMode = cookies.nightMode;
  const [typing, setTyping] = useState(false);
  const [inputData, setInputData] = useState("");

  const onchangeHandle = (e) => {
    e.preventDefault();
    if (e.target.value != "") {
      setTyping(true);
    } else {
      setTyping(false);
    }
    setInputData(e.target.value);
  };

  const clearData = () => {
    setInputData("");
    setTyping(false);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={`${nightMode ? "night-mode" : ""}`}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Seach anything you want
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            value={inputData}
            onChange={(e) => onchangeHandle(e)}
            placeholder="type here to search...."
          />
          {typing ? (
            <span
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={clearData}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
          ) : (
            <span
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                cursor: "pointer",
                color: "black",
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </span>
          )}
        </Modal.Body>
        <div className="w-100 p-3">
          {typing ? <SearchResults query={inputData} /> : ""}
        </div>
      </div>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default SearchModal;

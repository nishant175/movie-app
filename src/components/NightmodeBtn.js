import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import { useCookies } from "react-cookie";

const NightmodeBtn = () => {
  const [cookies, setCookie] = useCookies();
  const nightMode = cookies.nightMode;

  const toggleNightmode = () => {
    //dispatch(nightmodeActions.toggle());
    setCookie("nightMode", !nightMode);
  };

  //console.log("night mode", nightMode);

  return (
    <div>
      {nightMode ? (
        <Button
          variant=""
          onClick={(e) => {
            e.preventDefault();
            toggleNightmode();
          }}
        >
          <FontAwesomeIcon icon={faMoon} />
        </Button>
      ) : (
        <Button
          variant=""
          onClick={(e) => {
            e.preventDefault();
            toggleNightmode();
          }}
        >
          <FontAwesomeIcon icon={faSun} />
        </Button>
      )}
    </div>
  );
};

export default NightmodeBtn;

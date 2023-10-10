import React from "react";
import Carousel from "react-bootstrap/Carousel";
import RaOne from "../assets/images/ra-one.jpg";
import EngVing from "../assets/images/english-vinglish.jpg";
import Banjo from "../assets/images/banjo.jpg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={RaOne} alt="First slide" />
        <Carousel.Caption>
          <h3>Ra One</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={EngVing} alt="Second slide" />
        <Carousel.Caption>
          <h3>English Vinglish</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banjo} alt="Third slide" />
        <Carousel.Caption>
          <h3>Banjo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

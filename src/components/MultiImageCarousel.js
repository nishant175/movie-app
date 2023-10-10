import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardWithContent from "./CardWithContent";
import { cardImage } from "../constants/Images";

const MultiImageCarousel = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {data.map((dta, index) => (
          <CardWithContent
            key={index}
            title={dta.title}
            text={dta.description}
            linkText={dta.linkText}
            imgUrl={dta.imgUrl}
            fixedHeight={true}
          />
        ))}
      </Carousel>
    </>
  );
};

export default MultiImageCarousel;

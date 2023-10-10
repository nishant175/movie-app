import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardWithImg = ({ imgUrl, title, url }) => {
  const cardTitleStyle = {
    textAlign: "center",
    marginTop: "8%",
  };

  const cardOverlayStyle = {
    backgroundColor: "black",
    opacity: "0.7",
    color: "white",
  };

  const cardStyle = {
    height: "100px",
  };

  const cardImgStyle = {
    height: "100%",
    overFlow: "hidden",
    objectFit: "cover",
  };
  return (
    <Card className="" style={cardStyle}>
      <Card.Img style={cardImgStyle} src={imgUrl} />
      <Link to={`${url ?? ""}`}>
        <Card.ImgOverlay style={cardOverlayStyle} className="align-middle">
          <Card.Title style={cardTitleStyle}>{title}</Card.Title>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
};

export default CardWithImg;

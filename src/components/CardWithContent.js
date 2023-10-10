import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const CardWithContent = ({
  title,
  text,
  linkText,
  linkUrl,
  imgUrl,
  fixedHeight,
}) => {
  const [cookies, setCookie] = useCookies();
  const nightMode = cookies.nightMode;
  const cardStyle = {
    height: "250px",
  };

  const cardImgStyle = {
    height: "100%",
    overFlow: "hidden",
    objectFit: "cover",
  };
  return (
    <Card style={fixedHeight ? cardStyle : {}}>
      <Card.Img style={cardImgStyle} variant="top" src={imgUrl} />
      <Card.Body className={`${nightMode ? "text-light bg-dark" : ""}`}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={linkUrl}>
          <Button variant="primary">{linkText}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardWithContent;

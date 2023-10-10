import React, { useState } from "react";
import CardImg from "./CardWithContent";
import cardImage from "../assets/images/card.svg";
import { Link } from "react-router-dom";
import MultiImageCarousel from "./MultiImageCarousel";
import {
  action1,
  action2,
  comedy1,
  comedy2,
  drama1,
} from "../constants/Images";

const TopRatedMovies = () => {
  const [apiData, setApidata] = useState([
    {
      title: "Movie1",
      description: "description for movie 1",
      imgUrl: comedy1,
      linkText: "go to movie1",
    },
    {
      title: "Movie2",
      description: "description for movie 2",
      imgUrl: action2,
      linkText: "go to movie2",
    },
    {
      title: "Movie3",
      description: "description for movie 3",
      imgUrl: action1,
      linkText: "go to movie3",
    },
    {
      title: "Movie4",
      description: "description for movie 4",
      imgUrl: comedy2,
      linkText: "go to movie4",
    },
    {
      title: "Movie5",
      description: "description for movie 5",
      imgUrl: drama1,
      linkText: "go to movie5",
    },
  ]);
  return (
    <section>
      <h2 className="text-center">
        Top Rated{" "}
        <Link
          className="float-end"
          style={{
            fontSize: "15px",
            marginTop: "12px",
          }}
        >
          See All
        </Link>
      </h2>
      <div className="row">
        <MultiImageCarousel data={apiData} />
      </div>
    </section>
  );
};

export default TopRatedMovies;

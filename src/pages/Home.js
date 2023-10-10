import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Slider from "../components/Slider";
import TopRatedMovies from "../components/TopRatedMovies";
import LatestMovies from "../components/LatestMovies";
import BrowseByCatagory from "../components/BrowseByCatagory";

const Home = () => {
  return (
    <>
      <GeneralLayout>
        <Slider />
        <div className="container mt-4 mb-4">
          <LatestMovies />
          <TopRatedMovies />
          <BrowseByCatagory />
        </div>
      </GeneralLayout>
    </>
  );
};

export default Home;

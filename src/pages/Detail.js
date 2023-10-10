import React from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import Slider from "../components/Slider";
import BannerMovieDetail from "../components/BannerMovieDetail";
import { Banjo, RaOne } from "../constants/Images";

const Detail = () => {
  return (
    <>
      <GeneralLayout>
        <div
          style={
            {
              /*marginTop: "250px"*/
            }
          }
        >
          <BannerMovieDetail posterSrc={RaOne} movieSrc={Banjo} />
        </div>

        <div className="container mt-4 mb-4"></div>
      </GeneralLayout>
    </>
  );
};

export default Detail;

import React, { useState } from "react";

const Banner = ({ posterSrc, movieSrc }) => {
  const data = {
    id: 1,
    title: "Gadar 2",
    description:
      "When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs.",
    coverImage:
      "https://m.media-amazon.com/images/M/MV5BZDg3ZjNhN2QtOTgzMS00NmU1LTk1MmUtODM3ZTA4NjNlMWUwXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
    bannerImage:
      "https://gumlet.assettype.com/Prabhatkhabar%2F2023-08%2F98705a6d-13e7-499c-b876-769cf4ec03d1%2Fgadar_2_box_office.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    category: ["Action", "Adventure", "Drama"],
    trailer:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  };
  const [productDetail, setProductDetail] = useState(data);

  return (
    <>
      <div
        className=""
        style={{
          position: "relative",
          minHeight: "400px",
          backgroundImage: `url(${productDetail.bannerImage})`,
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          color: "white",
          // opacity: "0.7",
        }}
      >
        <div>
          <div
            style={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              width: "50%",
              backgroundColor: "black",
              opacity: "0.7",
              padding: "20px",
            }}
          >
            <h1 className="text-white">{productDetail.title}</h1>
            <h5>{productDetail.description}</h5>
          </div>

          <div
            className=""
            style={{ position: "absolute", bottom: "10px", left: "10px" }}
          >
            <img
              className="img-thumbnail"
              style={{
                width: "100%",
                borderRadius: "50%",
                width: "150px",
                height: "150px",
              }}
              src={productDetail.coverImage}
            />
          </div>
        </div>
      </div>
      <div>
        <video width="100%" height="500" controls>
          <source src={productDetail?.trailer} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Banner;

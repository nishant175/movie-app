import React, { useEffect, useState } from "react";
import GeneralLayout from "../layouts/GeneralLayout";
import BrowseByCatagory from "../components/BrowseByCatagory";
import CardWithContent from "../components/CardWithContent";
import { cardImage } from "../constants/Images";
import { useParams } from "react-router-dom";
import LoadingSkelton from "../components/loading-skelton/LoadingSkelton";

const Category = () => {
  const { categoryType } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // alert(categoryType);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [categoryType]);

  return (
    <GeneralLayout>
      <div className="container mt-4 mb-4 pt-4">
        {loading ? (
          <div className="loading-skelton-main">
            <LoadingSkelton />
          </div>
        ) : (
          <div className="row mt-4 mb-4">
            <h2 className="text-center">
              Search result for{" "}
              <b className="text-danger">
                <u>{categoryType}</u>
              </b>
            </h2>
            <div className="col-md-3 mt-4">
              <CardWithContent
                imgUrl={cardImage}
                title="Gadar2"
                text="sdfsdfsdf"
                linkText="view details"
                linkUrl={"/detail/gadar2"}
              />
            </div>
            <div className="col-md-3 mt-4">
              <CardWithContent
                imgUrl={cardImage}
                title="Jawan"
                text="sdfsdfsdf"
                linkText="view details"
                linkUrl={"/detail/jawan"}
              />
            </div>
            <div className="col-md-3 mt-4">
              <CardWithContent
                imgUrl={cardImage}
                title="Fuckray3"
                text="sdfsdfsdf"
                linkText="view details"
                linkUrl={"/detail/fuckrey3"}
              />
            </div>
            <div className="col-md-3 mt-4">
              <CardWithContent
                imgUrl={cardImage}
                title="Spidarman - Home coming"
                text="sdfsdfsdf"
                linkText="view details"
                linkUrl={"/detail/spidarman-homecoming"}
              />
            </div>
          </div>
        )}

        <BrowseByCatagory />
      </div>
    </GeneralLayout>
  );
};

export default Category;

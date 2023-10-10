import React from "react";
import { Link } from "react-router-dom";
import { action, comedy, drama, family } from "../constants/Images";
import CardWithImg from "./CardWithImg";

const BrowseByCatagory = () => {
  return (
    <>
      <section className="mt-4 mb-4">
        <h2 className="text-center mb-4">
          Browse by category{" "}
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
          <div className="col-md-3 col-xs-6">
            <CardWithImg
              imgUrl={action}
              title="Action"
              url={"/category/action"}
            />
          </div>
          <div className="col-md-3 col-xs-6">
            <CardWithImg
              imgUrl={comedy}
              title="Comedy"
              url={"/category/comedy"}
            />
          </div>
          <div className="col-md-3 col-xs-6">
            <CardWithImg imgUrl={drama} title="Drama" url={"/category/drama"} />
          </div>
          <div className="col-md-3 col-xs-6">
            <CardWithImg
              imgUrl={family}
              title="Family"
              url={"/category/family"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseByCatagory;

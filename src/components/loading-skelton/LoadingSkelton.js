import React from "react";
import { cardImage } from "../../constants/Images";

const LoadingSkelton = () => {
  return (
    <section className="mt-4 p-4">
      <div className="container mt-4">
        <div className="row mt-4">
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoadingSkelton;

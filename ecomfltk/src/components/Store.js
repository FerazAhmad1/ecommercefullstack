import React from "react";
import jeans1 from "../Images/jeans1.jpeg";
import jeans2 from "../Images/jeans2.png";
import "./store.css";

export const Store = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div>
          <img src={jeans1} />
        </div>
        <div className="product__description">
          <p className="product__brand">SUPERDRY</p>
          <p className="product__style">Blue jeans</p>
          <p className="product__rate"> 15000 </p>
        </div>
      </div>

      <div className="grid-item">
        <div>
          <img src="https://s3.eu-north-1.amazonaws.com/feraz-product-image/images/prod0.jpg" />
        </div>
        <div className="product__description">
          <p className="product__brand">SUPERDRY</p>
          <p className="product__style">Blue jeans</p>
          <p className="product__rate"> 15000 </p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Product.css";

function Product() {
  const location = useLocation();
  const { image, name, price } = location.state;
  console.log(image);
  return (
    <div className="product">
      <div>
        <img src={image} alt="Logo" />
      </div>
      <div className="detail">
        <h1>{name}</h1>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Product;

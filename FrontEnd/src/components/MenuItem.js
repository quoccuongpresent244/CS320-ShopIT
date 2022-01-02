import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css"

function MenuItem({ image, name, price }) {
  return (
    <Link
      to="/product"
      state={{ image: image , name: name, price, price}}
      style={{ textDecoration: "none" }}
    >
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
    </Link>
  );
}

export default MenuItem;

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg.jpeg";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Shop IT</h1>
        <p>Shop to fit any man</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
      <div className="menu">
        <h1 className="menuTitle">Feature Product</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

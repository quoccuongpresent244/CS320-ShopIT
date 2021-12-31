import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Pagination from "../components/Pagination";
import "../styles/Menu.css";

function Menu() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const idxLastProduct = currentPage * productsPerPage;
  const idxFirsProduct = idxLastProduct - productsPerPage;

  const currentProducts = MenuList.slice(idxFirsProduct, idxLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {currentProducts.map((menuItem, key) => {
          return (
            <div>
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={MenuList.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Menu;

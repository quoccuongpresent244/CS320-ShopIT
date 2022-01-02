import express from "express";

import { isAuth, isAdmin } from '../app/middleware/auth.js'
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  //getAllProducts,
  //getProductsWithFilter,
} from "../app/controllers/ProductController.js";
const productRouter = express.Router();

// productRouter.put('/update',updateAll)
//productRouter.get("/products", isAuth, getAllProducts);
productRouter.post("/", isAuth, isAdmin, createProduct);
productRouter.get("/:id", isAuth, getProduct);
productRouter.put("/:id", isAuth, isAdmin, updateProduct);
productRouter.delete("/:id", isAuth, isAdmin, deleteProduct);
//productRouter.get("/:filter/:arg", isAuth, getProductsWithFilter);

export default productRouter;
import express from "express";

import {getAllProducts,} from "../app/controllers/ProductController.js";

const mainPage = express.Router();

mainPage.get("/", getAllProducts);

export default mainPage


import express from "express";

import {getAllProducts,} from "../app/controllers/ProductController.js";

const main = express.Router();

main.get("/", getAllProducts);


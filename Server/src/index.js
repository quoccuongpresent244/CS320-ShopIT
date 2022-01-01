import express from "express";
import mongoose from "mongoose";
import path from "path";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";
import productRouter from "./routes/productRouter.js";
import commentRouter from "./routes/commentRouter.js";
import feedbackRouter from "./routes/feedbackRouter.js";


const app = express();
dotenv.config();
const port = process.env.APP_PORT

const __dirname = path.resolve();

const db = require('./config/db')

app.use(express.static(path.join(__dirname, './public')))

//connect db
db.connectDB();

//urlencoded
app.use(express.urlencoded({
    extended : true
}))
app.use(express.json())

// routers
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/comments", commentRouter);
app.use("/api/feedbacks", feedbackRouter);



app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
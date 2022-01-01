import Product from "../models/Product.js";
import Comment from "../models/Comment.js";
import Customer from "../models/Customer.js";
import Feedback from "../models/Feedback.js";
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, img, status } =
      req.body;
    if (!name) {
      return res
        .status(401)
        .json({ success: false, message: "Missing product name" });
    }
    const product = await Product.findOne({ name });
    if (product) {
      return res
        .status(404)
        .json({ success: false, message: "Product name is already existed" });
    }
    const newProduct = new Product({
        name, description, price, stock, img, status,
    });
    try {
      await newProduct.save();
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json({ success: false, message: "error at creating product" });
    }
    return res.status(200).json({
      success: true,
      message: "Adding product successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

// Find the product by Id (Read)
export const getProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id); // search by value _id in mongoose
      if (product) {
        const id_comments = product.commentList;
        let user_name_comment = [];
        let user_username_comment = [];
        let user_image_comment = [];
        let comment_content = [];
        for (let item of id_comments) {
          let user = await Comment.findOne({ _id: item })
            .populate("idUser")
            .select("username name image");
          user_name_comment.push(user.idUser.name);
          user_username_comment.push(user.idUser.username);
          user_image_comment.push(user.idUser.image);
          let cmt = await Comment.findOne({ _id: item });
          comment_content.push(cmt.content);
        }
        let comment_info = [
          user_name_comment,
          user_username_comment,
          user_image_comment,
          comment_content,
        ];
        console.log(comment_info);
  
        const id_feedbacks = product.feedbackList;
        let user_name_feedback = [];
        let user_username_feedback = [];
        let user_image_feedback = [];
        let feedback_content = [];
        let feedback_rating = [];
        for (let item of id_feedbacks) {
          let feedback = await Feedback.findOne({ _id: item });
          feedback_content.push(feedback.content);
          feedback_rating.push(feedback.rating);
          let user = await Feedback.findOne({ _id: item })
            .populate("idUser")
            .select("name username image");
          user_name_feedback.push(user.idUser.name);
          user_username_feedback.push(user.idUser.username);
          user_image_feedback.push(user.idUser.image);
        }
  
        let rating_info = [
          user_name_feedback,
          user_username_feedback,
          user_image_feedback,
          feedback_content,
          feedback_rating,
        ];
  
        return res.status(200).json({
          success: true,
          message: "finding successfully",
          product: product,
          comment_info,
          rating_info,
        });
      }
      return res.status(404).json({ success: false, message: "Incorrect Id" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, message: "Internal server error" });
    }
  };
  

//update Product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    const {
        name, description, price, stock, img, status, avgRating, feedbackList, commentList,
    } = req.body;
    product.name = name || product.name;
    product.price = price || product.price;
    //product.gene = gene || product.gene;
    product.stock = stock || product.stock;
    product.description = description || product.description;
    product.img = img || product.img;
    product.avgRating = avgRating || product.avgRating;
    product.status = status || product.status;
    product.feedbackList = feedbackList || product.feedbackList;
    product.commentList = commentList || product.commentList;
    let updatedProduct = null;
    try {
      updatedProduct = await product.save(); //  check If the name is unique?
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json({ success: false, message: "Name must be unique" });
    }

    return res.status(200).json({
      success: true,
      message: "update product successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }
    const deletedProduct = await product.remove();
    return res.status(200).json({
      success: true,
      message: "delete successfully",
      product: deletedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};


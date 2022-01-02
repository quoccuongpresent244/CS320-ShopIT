import Product from "../models/Product.js";
import Feedback from "../models/Feedback.js";

export const getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (feedback) {
      return res
        .status(200)
        .json({ success: true, message: "Finding feedback successfully", feedback });
    }
    return res
      .status(404)
      .json({ success: false, message: "Feedback not found" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const createFeedback = async (req, res) => {
  try {
    const { idProduct, content, rating } = req.body;
    const idUser=req.user._id;
    if (!idUser) {
      return res
        .status(401)
        .json({ success: false, message: "missing user id" });
    }
    if (!idProduct) {
      return res
        .status(401)
        .json({ success: false, message: "missing product id" });
    }
    const newFeedback = new Feedback({ idProduct, idUser, content, rating });
    try {
      await newFeedback.save();
      let product=await Product.findOne({'_id':newFeedback.idProduct})
      product.feedbackList.push(newFeedback._id)
      let avgRating=0;
      for (let rating of product.feedbackList){
            const feedback=await Feedback.findById(rating);
            avgRating+=feedback.rating;
      }
      avgRating=avgRating/(product.feedbackList.length)
      product.avgRating=avgRating;
      await product.save()
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json({ success: false, message: "error at creating product" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Adding feedback successfully",
        feedback: newFeedback,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const updateFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    const { content, rating } = req.body;
    if (feedback) {
      feedback.content = content || feedback.content;
      feedback.rating = rating || feedback.rating;
      const updatedFeedback = await feedback.save();
      return res
        .status(200)
        .json({
          success: true,
          message: "saving successfully",
          feedback: updatedFeedback,
        });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "incorrect feedback" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect feedback" });
    }
    let deletedFeedback = null;
    try {
      deletedFeedback = await feedback.remove();
    } catch (error) {
      return res
        .status(404)
        .json({ success: false, message: "can not delete feedback" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "delete feedback successfully",
        feedback: deletedFeedback,
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};
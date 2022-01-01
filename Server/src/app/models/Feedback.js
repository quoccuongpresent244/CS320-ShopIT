import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  idProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
    default: "",
    maxLength: 1000,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 5,
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;

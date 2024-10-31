import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
 {
  _id: { type: String },
  comment: { type: String, required: true },
  movie_id: { type: String, required: true },
  rating: { type: Number, required: true },
  user: { type: String, required: true },
  user_id: { type: String, required: true},
 },
 { collection: "reviews" }
);

export default reviewSchema;
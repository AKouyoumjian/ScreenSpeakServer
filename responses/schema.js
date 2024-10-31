import mongoose from "mongoose";
const responseSchema = new mongoose.Schema(
 {
  _id: { type: String },
  rev_id: { type: String },
  movie_id: { type: String },
  user: { type: String },
  comment: { type: String },
 },
 { collection: "responses" }
);

export default responseSchema;

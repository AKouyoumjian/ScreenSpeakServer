import mongoose from "mongoose";
const screeningSchema = new mongoose.Schema(
 {
  _id: { type: String },
  movie_id: { type: String },
  user: { type: String },
  date: { type: String },
  viewers: { type: [String], default: [] },
 },
 { collection: "screenings" }
);

export default screeningSchema;

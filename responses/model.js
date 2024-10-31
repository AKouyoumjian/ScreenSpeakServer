import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("responses", schema);
export default model;

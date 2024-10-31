import model from "./model.js";
export const createScreening = (scr) => model.create(scr);
export const updateScreening = (scId, sc) =>
 model.updateOne({ _id: scId }, { $set: sc });
export const findAllScreenings = () => model.find();

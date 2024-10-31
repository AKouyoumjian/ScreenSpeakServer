import model from "./model.js";
export const createResponse = (rep) => model.create(rep);
export const findAllResponses = () => model.find();


import model from "./model.js";   
export const createReview = (review) => model.create(review);
export const findAllReviews = () => model.find();
// export const findReviewById = (_Id) => model.findById(_Id);
// export const findReviewByUsername = (name) =>  model.findOne({ user: name });
// export const updateReview = (reviewId, user) => model.updateOne({ _id: reviewId }, { $set: user });
export const deleteReview = (reviewId) => model.deleteOne({ _id: reviewId });


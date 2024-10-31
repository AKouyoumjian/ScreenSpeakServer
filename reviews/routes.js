import * as dao from "./dao.js";
function ReviewRoutes(app) {
  
  const createReview = async (req, res) => {
    const review = await dao.createReview(req.body);
    res.json(review);
  };

  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params._id);
    res.json(status);
  };

  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  app.get("/api/reviews", findAllReviews);
  app.post("/api/reviews", createReview);
  app.delete("/api/reviews/:reviewId", deleteReview);
}
export default ReviewRoutes;

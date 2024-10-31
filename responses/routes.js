import * as dao from "./dao.js";
function ResponseRoutes(app) {
 const createResponse = async (req, res) => {
  const rep = await dao.createResponse(req.body);
  res.json(rep);
 };

 const findAllResponses = async (req, res) => {
  const reps = await dao.findAllResponses();
  res.json(reps);
 };

 app.post("/api/responses", createResponse);
 app.get("/api/responses", findAllResponses);
}
export default ResponseRoutes;

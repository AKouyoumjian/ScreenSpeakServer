import * as dao from "./dao.js";
function ScreeningsRoutes(app) {
 const createScreening = async (req, res) => {
  const rep = await dao.createScreening(req.body);
  res.json(rep);
 };

 const findAllScreenings = async (req, res) => {
  const reps = await dao.findAllScreenings();
  res.json(reps);
 };
 const updateScreening = async (req, res) => {
  const { scId } = req.params;
  const status = await dao.updateScreening(scId, req.body);
  res.json(status);
 };

 app.post("/api/screenings", createScreening);
 app.get("/api/screenings", findAllScreenings);
 app.put("/api/screenings/:scId", updateScreening);
}
export default ScreeningsRoutes;

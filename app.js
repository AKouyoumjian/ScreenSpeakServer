import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import ReviewRoutes from "./reviews/routes.js";
import ResponseRoutes from "./responses/routes.js";
import ScreeningsRoutes from "./screenings/routes.js";
import session from "express-session";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING

console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(
 cors({
  credentials: true,
  origin: process.env.OTHER_URL,
 })
);
const sessionOptions = {
 secret: "any string",
 resave: false,
 saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
 sessionOptions.proxy = true;
 sessionOptions.cookie = {
  sameSite: "none",
  secure: true,
 };
}
app.use(session(sessionOptions));

app.use(express.json());
ReviewRoutes(app);
ResponseRoutes(app);
ScreeningsRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);

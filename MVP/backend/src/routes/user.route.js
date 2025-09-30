import { Router } from "express";
import { getUserData, handleUserEvent } from "../controllers/userHandler.js";
import bodyParser from "body-parser";
import verifyWebhook from "../utils/verifyWebHook.js";
const userRoute = Router();

// endpoints
userRoute.get("/me", getUserData);
userRoute.post(
  "/save-user",
  // Middleware to get the raw body
  bodyParser.raw({ type: "application/json" }),
  // Middleware to verify and parse the body
  verifyWebhook,
  handleUserEvent
);
export default userRoute;

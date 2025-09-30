import { Router } from "express";
import { handleGetSchools } from "../controllers/handleSchools.js";
const schoolsRoute = Router();

// routes
schoolsRoute.get("/", handleGetSchools);

export default schoolsRoute;

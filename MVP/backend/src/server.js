import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import connectToDB from "./database/database.js";
import cookieParser from "cookie-parser";
import schoolsRoute from "./routes/schools.route.js";
import userRoute from "./routes/user.route.js";
import {
  clerkMiddleware,
  clerkClient,
  requireAuth,
  getAuth,
} from "@clerk/express";

// Initialise express app
const app = express();


// routes
app.use("/api/v1/schools", schoolsRoute);
app.use("/api/v1/users", userRoute);


// Express Middlewares
app.use(express.json({ urlencoded: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  })
);

// clerk
app.use(clerkMiddleware());

// Use requireAuth() to protect this route
// If user isn't authenticated, requireAuth() will redirect back to the homepage
app.get("/api/v1/protected", requireAuth(), async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  const { userId } = getAuth(req);

  // Use Clerk's JavaScript Backend SDK to get the user's User object
  const user = await clerkClient.users.getUser(userId);

  return res.status(200).json({
    success: true,
    data: user,
  });
});




// Start the development server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectToDB();
});
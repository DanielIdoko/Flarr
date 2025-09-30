import { clerkClient, getAuth, requireAuth } from "@clerk/express";
import User from "../models/User.js";

/**
 * @description Get user's profile
 * @access Youth/School/Company
 * @route POST '/me
 *  **/
export const getUserData = async (req, res) => {
  try {
    // Get the user's id from clerk
    const userId = getAuth(req);
    // Get user from clerk by id
    const clerkUser = await clerkClient.users.getUser(userId);

    // Get the user's profile from the user's id and omit clerkId on the response
    const userProfile = await User.findOne({ clerkId: userId }).select(
      "-clerkId"
    );

    // Check for user from our database
    if (!userProfile) {
      return res.status(200).json({
        success: false,
        message: "User not found in db",
      });
    }
    res.status(200).json({
      success: true,
      data: userProfile,
    });
  } catch (error) {
    // Handle error
    console.error("Error: ", error);

    res.status(500).json({
      success: false,
      error: "Internal Server error",
      details: error.message,
    });
  }
};

/**
 * @description Save user to database, after a user signs up with clerk, i used clerk's webhook to listen for events such as the 'user.created' event which allowed me to get the newly created user and save to our oen database.
 * @access Public
 * @route POST '/save-user
 *  **/

export const saveUserToDatabase = async (req, res) => {
  // The verified payload is on req.webHookEvent
  const event = req.webHookEvent;

  if (event.type === "user.created") {
    const { id, first_name, last_name, email_addresses, username } = event.data;

    // Extract the primary email address
    const primaryEmail = email_addresses.find(
      (email) => email.id === event.data.primary_email_address_id
    )?.email_address;

    try {
      // Save the user to MongoDB database
      const newUser = await User.insertOne({
        clerkId: id, // Store Clerk User ID for lookups
        firstname: first_name,
        username: username,
        lastName: last_name,
        email: primaryEmail,
        avatarUrl: '',
        // preferences,
      });

      console.log(`User created in DB: ${id}`);
    } catch (dbError) {
      console.error("Database error on user creation:", dbError);
      // It's important to still return a 200/202 to Clerk to avoid retries,
      // but log the error for manual investigation.
      return res.status(202).json({
        success: true,
        message: "Database save failed, but event received.",
      });
    }
  }

  // A 200 OK response tells Clerk the webhook was received successfully.
  res.status(200).json({ success: true });
};

import mongoose from "mongoose";

// Database schema for users (includes; youths, schools and client)
const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: [true, "Clerk Id is required"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
    },
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "User email is required"],
    },
    role: {
      type: String,
      enum: ["school", "youth", "client"],
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    preferences: {
      darkMode: { type: Boolean, default: false },
      language: { type: String, default: "en" },
    },

    // Specific roles for a user [id]
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      index: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";
import { MONGO_DB_URI, NODE_ENV } from "../config/env.js";

// Function to connect to our mongodb database
const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log(`Successfully connected to database in ${NODE_ENV}`);
  } catch (error) {
    console.log(error);
    // Stop the node process
    process.exit(1);
  }
};

export default connectToDB;

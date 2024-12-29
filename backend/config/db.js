import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

const MONGO_URI = ENV_VARS.MONGO_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB connection: ${error.message}`);
    process.exit(1); // 1 means an error occurred, 0 means success
  }
};

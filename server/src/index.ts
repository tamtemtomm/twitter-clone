// Import Essential Dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Initialize Config
import * as dotenv from "dotenv";
dotenv.config();

// Import API Router
import TweetRouter from "./api/TweetAPI";
import UserRouter from "./api/UserAPI";

// Initialize express app
const app: express.Application = express();
app.use(express.json());
app.use(cors());

// Connect to mongo db
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ibmusbt.mongodb.net/`
);

// Use Router API
app.use("/tweet-records", TweetRouter);
app.use("/user-records", UserRouter);

// Listen into the PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("SERVER RUNNING");
});

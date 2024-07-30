// Import Dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import Configs
import { dbUsername, dbPassword, dbName } from "./config/db-config";
import UserModel from "./models/User";
import { createUser, getUser } from "./api/UserAPI";
import { getTweet } from "./api/TweetAPI";
import * as dotenv from "dotenv";
dotenv.config();

// Initialize express app
const app: express.Application = express();
app.use(express.json());
app.use(cors());

// Connect to mongo db
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ibmusbt.mongodb.net/`
);

getUser(app, {});
createUser(app);
getTweet(app, {});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("SERVER RUNNING");
});

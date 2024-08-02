import express, { Request, Response } from "express";
import TweetModel from "../models/Tweet";

const router = express.Router();

router.post("/createTweet", async (req: Request, res: Response) => {
  try {
    const tweet = req.body;
    const newTweet = new TweetModel(tweet);
    const savedTweet = await newTweet.save();
    res.status(200).send(savedTweet);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getTweet", async (req: Request, res: Response) => {
  try {
    const records = await TweetModel.find({});
    if (records.length === 0) {
      return res.status(404).send("No records found for the user.");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getTweet/:_id", async (req: Request, res: Response) => {
  try {
    const _id = req.params._id;
    const records = await TweetModel.find({ _id: _id });
    if (records.length === 0) {
      return res.status(404).send("No tweet Found on this _id.");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getTweet/userId/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const records = await TweetModel.find({ userId: userId });
    if (records.length === 0) {
      return res.status(404).send("No records found for the user.");
    }
    res.status(200).send(records);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;

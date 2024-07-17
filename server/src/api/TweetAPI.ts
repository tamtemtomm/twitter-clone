import express, {Request, Response} from "express";
import TweetModel from "../models/Tweet";

export const createTweet = (app: express.Application) => {
  app.post("/createTweet", async (req: Request, res: Response) => {
    const tweet = req.body;
    const newTweet = new TweetModel(tweet);
    await newTweet.save();

    res.json(tweet);
  });
};

export const getTweet = (app: express.Application, query: {}) => {
    app.get("/getTweet", async (req: Request, res: Response) => {
        let result = await TweetModel.find(query);
        res.status(200).json(result);
      });
};

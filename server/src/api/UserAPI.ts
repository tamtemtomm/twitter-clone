import express, {Request, Response} from "express";
import UserModel from "../models/User";

export const createUser = (app: express.Application) => {
  app.post("/createUser", async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
  });
};

export const getUser = (app: express.Application, query: {}) => {
    app.get("/getUser", async (req: Request, res: Response) => {
        let result = await UserModel.find(query);
        res.status(200).json(result);
      });
};

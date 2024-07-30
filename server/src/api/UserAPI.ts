import express, { Request, Response } from "express";
import UserModel from "../models/User";

const router = express.Router();

router.post("/createUser", async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = new UserModel(user);
    const savedUser = newUser.save();
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getUser", async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({});
    if (users.length === 0) {
      return res.status(404).send("No records found for the user.");
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;

import { Request, Response } from "express";
import { User } from "../model/User";

const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};



export {
    createUser
}
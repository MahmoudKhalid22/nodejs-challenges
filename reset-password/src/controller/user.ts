import { Request, Response } from "express";
import { User } from "../model/user";

const newUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("user has been created");
  } catch (e) {
    res.send({ e });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User?.findByCredentials(
      req.body.email,
      req.body.password
    );
    if (!user) {
      res.send({ err: "the user isn't found" });
    }
    const token = user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {}
};

const forgetPassword = async () => {};

export { newUser, loginUser, forgetPassword };

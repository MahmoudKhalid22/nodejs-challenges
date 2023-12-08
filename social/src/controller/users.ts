import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../model/User";

const createUser = async (req: Request, res: Response) => {
  try {
    const hashPass = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      ...req.body,
      password: hashPass,
    });
    await user.save();
    const { password, ...others } = user;
    res.send(others);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ Error: "The user isn't found" });
    }
    if (user) {
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass) {
        return res.status(400).send({ Error: "Invalid Password" });
      }
    }
    res.send(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ error: "user is not found" });
    }
    const { password, ...others } = user;
    res.send(others);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    let user;

    if (typeof req.body.password !== "undefined" && req.body.password !== "") {
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      user = await User.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          password: hashedPass,
        },
        {
          new: true,
        }
      );
    } else {
      user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    }

    res.send("User has been Updated");
  } catch (err) {
    console.error("Error during update:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("user has been deleted");
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { createUser, loginUser, updateUser, deleteUser, getUser };

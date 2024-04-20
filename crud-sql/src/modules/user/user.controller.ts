import express, { Request, Response } from "express";
import UserService from "./user.service";
import UserRepo from "./user.repo";

const router = express.Router();

class UserController {
  private router = express.Router();
  private readonly service;

  constructor(service: UserRepo) {
    this.service = service;
  }
  createUser = async (req: Request, res: Response): Promise<void> => {
    const { id, name, email } = req.body;
    try {
      const newUser = this.service.createUser(id, name, email);
      res.status(201).json({ message: "user has been created" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Error creating user");
    }
  };

  initRoutes() {
    this.router.post("/new", this.createUser);
  }
  getRoutes() {
    return this.router;
  }
}

export default UserController;

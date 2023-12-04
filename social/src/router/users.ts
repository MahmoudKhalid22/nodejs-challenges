import { Router } from "express";
const router = Router();
import { createUser } from "../controller/users";

// create user
router.post("/signup", createUser);

router.get("");

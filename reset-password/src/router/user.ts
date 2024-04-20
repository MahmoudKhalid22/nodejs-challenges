import { Router } from "express";
import { forgetPassword, loginUser, newUser } from "../controller/user";

const router = Router();

router.post("/", newUser);
router.post("/login", loginUser);

router.post("/forget", forgetPassword);

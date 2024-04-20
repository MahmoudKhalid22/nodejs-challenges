import express from "express";
import "./config/dbConnection";
import { userRouter } from "./routes/user.router";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use(userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log("server is running on url + http://localhost:" + port)
);

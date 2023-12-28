import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
import { router } from "./routes/index";
import { connection } from "./db/dbConnnection";

const app = express();

app.use(bodyParser.json());
app.use(router);

// const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz123456789", 10);

const PORT = process.env.PORT;
connection();
app.listen(PORT, () =>
  console.log("Server is running on http://localhost:" + PORT)
);

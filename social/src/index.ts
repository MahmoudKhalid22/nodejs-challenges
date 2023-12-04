import express from "express";
const connection = require("./dbConnection/db")
const app = express();

app.use(express.json());

app.listen(5000, (): void =>
  console.log("Server is running on http://localhost:5000/")
);

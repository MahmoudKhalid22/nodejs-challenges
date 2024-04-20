import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "crudnodejs",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected");
});

export default db;

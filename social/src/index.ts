<<<<<<< HEAD
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const connection = require("./dbConnection/db");
const router = require("./router/users");
const app = express();

app.use(express.json());
app.use(router);
app.use(morgan("common"));
app.use(helmet());

app.listen(5000, (): void =>
  console.log("Server is running on http://localhost:5000/")
);
=======
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
const connection = require("./dbConnection/db");
const router = require("./router/users");
const app = express();

app.use(express.json());
app.use(router);
app.use(morgan("common"));
app.use(helmet());

app.listen(5000, (): void =>
  console.log("Server is running on http://localhost:5000/")
);
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184

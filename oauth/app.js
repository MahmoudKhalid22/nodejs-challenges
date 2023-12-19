const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const passportSetup = require("./config/passport-setup");
const mongoose = require("./utils/db");
const cookieSession = require("cookie-session")
const passport = require("passport")
const session = require("express-session")

const app = express();

app.use(authRoutes);
app.set("view engine", "ejs");


app.use(cookieSession({
  maxAge: 24 * 60 * 60* 1000,
  keys: [process.env.COOKIE_KEY]
}))

// intialize passport
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const passportSetup = require("./config/passport-setup");
const { connectionDB } = require("./utils/db");
const cookieSession = require("cookie-session");
const passport = require("passport");
const session = require("express-session");

const app = express();

app.use(authRoutes);
app.set("view engine", "ejs");

// Use cookieSession before passport middleware
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

// Use express-session before passport middleware
app.use(
  session({
    secret: "thisisoauthtestforthefirsttime",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize passport after session middleware
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("home");
});

connectionDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

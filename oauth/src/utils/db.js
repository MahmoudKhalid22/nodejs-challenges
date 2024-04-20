const mongoose = require("mongoose");

function connectionDB() {
  mongoose.connect("mongodb://127.0.0.1:27017/OAuth");

  mongoose.connection.once("open", () => {
    console.log("Connected!");
  });
}

module.exports = { connectionDB };

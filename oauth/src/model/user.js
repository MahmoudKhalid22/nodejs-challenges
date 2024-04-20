const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    unique: function () {
      return !this.googleId; 
    },
    sparse:true,
    required: function () {
      return this.email && !this.googleId;
    },
  },
  password: {
    type: String,
    required: function () {
      return this.email && !this.googleId;
    },
  },
  verified: {
    type: Boolean,
    default: function () {
      return !!this.googleId;
    },
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true
    
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;

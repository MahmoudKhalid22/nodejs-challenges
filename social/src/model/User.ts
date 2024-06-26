<<<<<<< HEAD
import mongoose, { model, mongo } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          if (!validator.isEmail(value)) {
            throw new Error("email isn't correct");
          }
        },
      },
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: Buffer,
      default: "",
    },
    coverPicture: {
      type: Buffer,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followins: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    from: {
      type: String,
      default: "",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export { User };
=======
import mongoose, { model, mongo } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          if (!validator.isEmail(value)) {
            throw new Error("email isn't correct");
          }
        },
      },
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: Buffer,
      default: "",
    },
    coverPicture: {
      type: Buffer,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followins: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    from: {
      type: String,
      default: "",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export { User };
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184

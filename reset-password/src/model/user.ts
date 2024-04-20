import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

userSchema.statics.findByCredentials = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("Email is not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("No valid password");
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
const User = mongoose.model("User", userSchema);

export { User };

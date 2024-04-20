import mongoose from "mongoose";

const connection = () => {
  const mongodbUrl = process.env.MONGODB_URL || "undefined";

  mongoose.connect(mongodbUrl);
  mongoose.connection.once("open", () => console.log("db connected"));
};

export { connection };

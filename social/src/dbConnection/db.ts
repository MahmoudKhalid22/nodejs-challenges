<<<<<<< HEAD
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/social");

mongoose.connection.once("open", (): void => console.log("connected to db"));

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

export default { mongoose };
=======
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/social");

mongoose.connection.once("open", (): void => console.log("connected to db"));

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

export default { mongoose };
>>>>>>> c1ed7c50b559191962712fbf44dc4be41ab3a184

import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

export default mongoose.model.user || mongoose.model("user", userModel);

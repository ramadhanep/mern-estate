import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/32610424?v=4"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;

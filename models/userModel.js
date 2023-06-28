const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please insert your username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please insert your email"],
      unique: true,
    },
    password: { type: String, required: [true, "Please insert your password"] },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

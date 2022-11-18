const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: [true, "Name is required"],
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: [true, "Password is required"],
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

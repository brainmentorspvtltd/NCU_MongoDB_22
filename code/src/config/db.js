const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  } };

module.exports = connectDB;

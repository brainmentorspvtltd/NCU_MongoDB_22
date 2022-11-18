const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

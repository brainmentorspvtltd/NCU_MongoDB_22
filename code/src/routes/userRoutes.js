const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();


router.get("/", (req, res) => {
  res.status(200).send({ message: "Ok I am connected" });
});
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send({ message: "All fields are required" });
  }

  const userExists = await UserModel.findOne({ email: email });
  
  if (userExists) {
    res.status(400).send({ message: "user already exists" });
  }

  const user = await UserModel.create({ name, email, password });

  res.status(200).send({ _id: user.id, name: user.name, email: user.email });
});



module.exports = router;

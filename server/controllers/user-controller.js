// controllers/userController.js
const userModel = require("../models/user.model");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the provided credentials match the expected ones
    if (username !== "testuser" || password !== "testpassword") {
      return res.status(401).json({ error: "Invalid username/password" });
    }

    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new userModel({ username, password });
    await user.save();
    res.json({ msg: "User added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

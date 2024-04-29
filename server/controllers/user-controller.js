const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model");

exports.getUser = async (req, res) => { 
  try {
    const users = await userModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username !== "testuser" || password !== "testpassword") {
      return res.status(401).json({ message: "Invalid username/password" });
    }
   // Find existing user in our In memory Mongo database
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Generate JWT token
    const token = jwt.sign({ data: username }, "process.env.TOKEN_SECRET", {
      expiresIn: "1h",
    });

    const user = new userModel({ username, password });
    await user.save();
    return res.json({ message: "User added successfully!", token });
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

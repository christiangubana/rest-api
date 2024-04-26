import express from "express";
import connect from "./database/connect.js";
import userModel from "./models/user.model.js";

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

// GET: http://localhost:8080

app.get("/", (red, res) => {
  try {
    userModel
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json({ error });
      });
  } catch (error) {
    res.json({ error });
  }
});

// PORT: http://localhost:8080/add

app.post("/add", (req, res) => {
  try {
    const user = new userModel({
      username: "testuser",
      password: "testpassword",
    });

    user
      .save()
      .then(() => {
        return res.json({ msg: "User add successfully!" });
      })
      .catch((error) => {
        return res.json({ error });
      });
  } catch (error) {
    res.json({ error: "Invalid Add request" });
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Can't connect to the server");
    }
  })
  .catch(error => {
    console.log("Invalid Database Connection...!");
  });

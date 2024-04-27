const express = require("express");
const cors = require("cors");
const connect = require("./database/connect.js");
const userRoutes = require("./routes/user-route.js");
const todoRouter = require("./routes/todo-route.js");
const { handleError } = require("./middlewares/errorHandler.js")
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


// // GET: http://localhost:8080
// app.get("/", (red, res) => {
//   try {
//     userModel
//       .find({})
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((error) => {
//         res.json({ error });
//       });
//   } catch (error) {
//     res.json({ error });
//   }
// });

// // PORT: http://localhost:8080/add
// app.post("/add", (req, res) => {
//   try {
//     const user = new userModel({
//       username: "testuser",
//       password: "testpassword",
//     });

//     user
//       .save()
//       .then(() => {
//         return res.json({ msg: "User add successfully!" });
//       })
//       .catch((error) => {
//         return res.json({ error });
//       });
//   } catch (error) {
//     res.json({ error: "Invalid Add request" });
//   }
// });

app.use("/api", userRoutes);
app.use("/api", todoRouter);
app.use(handleError);

const port = process.env.PORT || 8080;

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
  .catch((error) => {
    console.log("Invalid Database Connection...!");
  });

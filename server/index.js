const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connect = require("./database/connect.js");
const userRoutes = require("./routes/user-route.js");
const todoRouter = require("./routes/todo-route.js");
const weatherRouter = require("./routes/weatherRoutes.js");
const { handleError } = require("./middlewares/errorHandler.js");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api", userRoutes);
app.use("/api", todoRouter);
app.use('/api', weatherRouter);

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

// routes/todoRoutes.js
const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo-controller");
// const basicAuth = require("../middlewares/basicAuth");

// Middleware to apply Basic authentication to todos endpoints
// router.use("/todos", basicAuth);

// Todos endpoints
router.get("/todos", todoController.getAllTodos);
router.post("/todos", todoController.addTodo);
router.get("/todos/:id", todoController.getTodoById);
router.put("/todos/:id", todoController.updateTodoById);
router.delete("/todos/:id", todoController.deleteTodoById);

module.exports = router;

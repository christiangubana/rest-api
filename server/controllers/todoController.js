// controllers/todoController.js
const todoService = require("../services/todoService");

exports.addTodo = (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = todoService.addTodo({ title, description });
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTodoById = (req, res) => {
  try {
    const { id } = req.params;
    const todo = todoService.getTodoById(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateTodoById = (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = todoService.updateTodoById(id, { title, description });
    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.deleteTodoById = (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = todoService.deleteTodoById(id);
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ msg: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getAllTodos = (req, res) => {
  try {
    const todos = todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

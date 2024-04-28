// controllers/todoController.js
const todoService = require("../services/todo-service");
exports.addTodo = (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = todoService.addTodo({ title, description });
    res.status(201).json({ id: todo._id, title: todo.title, description: todo.description, msg: "Todo added successfully" });
    console.log(todo); //check the value of todo
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
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ id: todo._id, title: todo.title, description: todo.description });
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
    res.json(updatedTodo); // Return updatedTodo directly
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
    res.json(todos.map(todo => ({ id: todo._id, title: todo.title, description: todo.description })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

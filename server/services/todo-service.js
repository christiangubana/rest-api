const Todo = require("../models/todo.model");

let todos = []; // Initialize the todos array outside of functions

exports.addTodo = (todo) => {
  const newTodo = new Todo(todo);
  todos.push(newTodo);
  return newTodo; // Return the new todo object
};

exports.getAllTodos = () => {
  return todos;
};

exports.getTodoById = (id) => {
  return todos.find((todo) => todo._id.toString() === id);
};

exports.updateTodoById = (id, updatedTodo) => {
  // const index = todos.findIndex((todo) => todo.id === id);
  const index = todos.findIndex((todo) => todo._id.toString() === id);
  if (index !== -1) {
    // Retain the original _id field
    updatedTodo._id = todos[index]._id;
    todos[index] = updatedTodo;
    return updatedTodo;
  }
  return null; // Return null if todo with ID is not found
};

exports.deleteTodoById = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1); // Remove the todo from the array
    return true; // Indicate successful deletion
  }
  return false; // Indicate todo not found
};

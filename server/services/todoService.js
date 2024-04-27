// services/todoService.js
let todos = [];

exports.getAllTodos = () => {
  return todos;
};

exports.getTodoById = (id) => {
  return todos.find((todo) => todo.id === id);
};

exports.addTodo = (todo) => {
  todos.push(todo);
};

exports.updateTodoById = (id, updatedTodo) => {
  todos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
};

exports.deleteTodoById = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

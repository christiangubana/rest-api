import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in local storage");
        }

        const response = await axios.get("http://localhost:8080/api/todos", {
          headers: {
            'Content-Type': 'application/json',
            //Make sure username/password is passed in the headers
          },
        });
        setTodos(response.data);
      } catch (error) {
        console.error(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error(`Failed to fetch todos, ${error.message}`);
        }
      }
    };

    fetchTodos();
  }, []);

  const handleDelete = async (todoId) => {
    try {
      await axios.delete(`http://localhost:8080/api/todos/${todoId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodos(todos.filter((todo) => todo.id !== todoId));
      console.log(todo)
      toast.success("Todo item removed successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.error("Error deleting todo item:", error);
      toast.error(error.response.data.message);
    }
  };

  const handleEdit = (todoId) => {
    console.log(todoId)
    navigate(`/edit/${todoId}`);
  };

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500">
                There's no todo to show. Start adding new items to the list.
              </p>
            ) : (
              todos.map((todo) => {
                console.log(todo.id)
                return (
                  <div
                    key={todo.id}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="px-4 py-4">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        {todo.title}
                      </h2>
                      <p className="text-gray-700">{todo.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex">
                          <button
                            onClick={() => handleEdit(todo.id)}
                            className="hover:text-blue-700 focus:outline-none bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(todo.id)}
                            className="text-red-500 hover:text-red-700 focus:outline-none bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Created at {formatDate(todo.createdAt)}
                      </p>
                    </div>
                  </div>
                )
              })
            )}
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => navigate("/add")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Add New Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

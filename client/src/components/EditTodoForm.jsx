import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CreateTodoForm from "./CreateTodoForm";

const EditTodoForm = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState(null);

  useEffect(() => {
    const fetchTodoItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/todos/${itemId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setTodoData(response.data);
      } catch (error) {
        console.error("Error fetching todo item:", error);
        toast.error(
          error.response?.data?.message || "Failed to fetch todo item"
        );
        navigate("/dashboard");
      }
    };

    fetchTodoItem();
  }, [itemId, navigate]);

  const handleUpdate = async (updatedTodo) => {
    try {
      await axios.put(
        `http://localhost:8080/api/todos/${itemId}`,
        updatedTodo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Todo item updated successfully", {
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating todo item:", error);
      toast.error(
        error.response?.data?.message || "Failed to update todo item"
      );
    }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {todoData && (
            <CreateTodoForm
              initialData={todoData}
              onUpdate={handleUpdate}
              onCancelEdit={handleCancel}
              mode="edit" // Pass the mode prop as "edit"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTodoForm;

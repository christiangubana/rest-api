import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CreateTodoForm from "./CreateTodoForm";
import { getAuthFromLocalStorage } from "../utils/authUtils";
import API_BASE_URL from "../../api/config";


const EditTodoForm = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState(null);

  useEffect(() => {
    const fetchTodoItem = async () => {
      const auth = getAuthFromLocalStorage();

      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/todos/${itemId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Basic " + btoa(`${auth.username}:${auth.password}`),
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
      const auth = getAuthFromLocalStorage();

      await axios.put(
        `${API_BASE_URL}/api/todos/${itemId}`,
        updatedTodo,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(`${auth.username}:${auth.password}`),
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

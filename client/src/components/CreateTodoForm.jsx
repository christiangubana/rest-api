import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateTodoForm = ({ initialData, onUpdate, onCancelEdit, mode }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
  });

  const [errors, setErrors] = useState({});
  const isUpdating = !!initialData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (isUpdating) {
        const response = await axios.put(
          `http://localhost:8080/api/todos/${initialData._id}`,
          formData,
          config
        );
        onUpdate(response.data.todo);
      } else {
        await axios.post(`http://localhost:8080/api/todos`, formData, config);
        toast.success("Todo item added successfully", {
          position: "top-center",
        });
      }

      navigate("/dashboard");
      setFormData({
        title: "",
        description: "",
        image: null,
      });
    } catch (error) {
      console.error("Error updating todo item:", error);
      toast.error(error.message || "Failed to update todo item.");
    }
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (
    <div className="flex justify-center items-start h-screen pt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          {mode === "edit" ? "Edit Todo Item" : "Add New Todo Item"}
        </h1>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Todo Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? "border-red-500" : ""
            }`}
            placeholder="Todo item title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Todo Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.description ? "border-red-500" : ""
            }`}
            placeholder="Todo description"
          />
          {errors.description && (
            <p className="text-red-500 text-xs italic">{errors.description}</p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isUpdating ? "Update Todo Item" : "Add Todo Item"}
          </button>
          {isUpdating && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateTodoForm;

import React from 'react';

const Dashboard = ({ todos }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900">Dashboard</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {todos.map(todo => (
            <div key={todo.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{todo.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{todo.description}</p>
                <p className="text-xs text-gray-400 mb-2">Created: {todo.dateCreated}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-900" onClick={() => handleEdit(todo.id)}>Edit</button>
                  <button className="text-sm font-medium text-red-600 hover:text-red-900" onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

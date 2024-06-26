import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); 
    localStorage.removeItem("password"); 
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleAddItem = () => {
    navigate("/add"); // Navigate to /add route
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-lg font-bold">GG</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/weather"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Weather
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-inherit"
                    >
                      Logout
                    </button>
                    <button
                      onClick={handleAddItem}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-inherit"
                    >
                      Add Item
                    </button>{" "}
                    {/* Add Item button */}
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/weather"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Weather
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {isLoggedIn && (
              <div className="flex items-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="mr-4">{userName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

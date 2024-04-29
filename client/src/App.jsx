import React, { Suspense, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Layout/NavBar";
import Loading from "./components/Screens/Global/Loading";
import Weather from "./components/Weather";

const Login = React.lazy(() => import("./components/Login"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const CreateTodoForm = React.lazy(() => import("./components/CreateTodoForm"));
const EditTodoForm = React.lazy(() => import("./components/EditTodoForm"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} />
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
          <Route path="/weather" element={<Weather/>} />
          {/* Protected Routes */}
          {isLoggedIn ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add" element={<CreateTodoForm />} />
              <Route path="/edit/:itemId" element={<EditTodoForm />} />
            </>
          ) : (
            <>
              {/* Redirect to login if not logged in */}
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

import "./App.css";
import Login from "../components/Login";
import { ToastContainer } from "react-toastify";
import Weather from "../components/Weather";

function App() {
  return (
    <>
      <ToastContainer />
      <Weather />
    </>
  );
}

export default App;

import "./App.css";
import Signup from "./components/signup/Index";
import Login from "./components/signin/index";
import Main from "./components/Main/index";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}

        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;

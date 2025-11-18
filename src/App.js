// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Mural from "./components/Mural";
import Respiracao from "./components/Respiracao";
import Recomendados from "./components/Recomendados";
import Conquistas from "./components/Conquistas";
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mural" element={<Mural />} />
          <Route path="/conquistas" element={<Conquistas />} />
          <Route path="/respiracao" element={<Respiracao />} />
          <Route path="/recomendados" element={<Recomendados />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;

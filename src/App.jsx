import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import "./styles/App.css";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/chat/:id" element={<Chat />} />
                        <Route path="/login" element={<Login />} />  
                        <Route path="/register" element={<Register />} />
                    </Routes>               
                </div>
            </div>
        </Router>
    );
}

export default App;

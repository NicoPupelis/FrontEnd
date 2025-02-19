import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>BIENVENIDO A LA COPIA DE SLACK</h1>
            <Link to="/register">
                <button className="register-button">Registrarse</button>
            </Link>
        </div>
    );
};

export default Home;

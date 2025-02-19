import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
  // Estados para email y password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado para errores de validación
  const [errors, setErrors] = useState({});

  // Función que valida el formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar email
    if (!email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Formato de email inválido";
    }

    // Validar password
    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("¡Login exitoso!");
      localStorage.setItem("isLoggedIn", "true");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="text"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;

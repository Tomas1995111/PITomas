import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Manejar el cierre de sesión y redirigir a la página de inicio de sesión
    onLogout();
    navigate('/');
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* Agregar el botón "Log out" y su manejador de eventos */}
      <button onClick={handleLogout}>Log out</button>
      {/* ... otros elementos del componente Nav */}
    </div>
  );
};

export default Nav;
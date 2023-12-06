import React, { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import SearchBar from './components/SearchBar';
import Error404 from './components/Error404';
import Form from './components/Form';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = 'tomasarriolaa@gmail.com';
  const PASSWORD = 'tomas1995';
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    // Realiza la búsqueda utilizando el término de búsqueda (searchTerm)
    axios(`https://rym2.up.railway.app/api/character/${searchTerm}?key=pi-tomas1995111`)
      .then(({ data }) => {
        console.log('Respuesta de la API:', data);
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  const onSearch = (id) => {
    // Llama a la función de búsqueda con el ID proporcionado
    handleSearch(id);
  };

  const onClose = (id) => {
    const updatedCharacters = characters.filter((character) => character.id !== id.toString());
    setCharacters(updatedCharacters);
  };

  const isRootPath = window.location.pathname === '/';

  // Función de login
  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  // Función de logout
  const handleLogout = () => {
    setAccess(false);
    setCharacters([]); // Limpiar la lista de personajes al hacer logout
    navigate('/');
  };

  return (
    <div>
      {!isRootPath && <Nav onLogout={handleLogout} />}
      {isRootPath ? null : <SearchBar onSearch={onSearch} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/"
          element={<Form access={access} setAccess={setAccess} EMAIL={EMAIL} PASSWORD={PASSWORD} login={login} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
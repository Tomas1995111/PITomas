import React, { useState, useEffect } from 'react';
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
    axios(`https://rym2.up.railway.app/api/character/${searchTerm}?key=pi-tomas1995111`)
      .then(({ data }) => {
        setCharacters((oldChars) => {
          if (data.name) {
            return [...oldChars, data];
          } else {
            window.alert('¡No hay personajes con este ID!');
            return oldChars;
          }
        });
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  const onSearch = (id) => {
    handleSearch(id);
  };

  const onClose = (id) => {
    console.log("Cerrando tarjeta con ID:", id);
  
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.filter((character) => character.id !== id.toString());
      console.log("Personajes actualizados:", updatedCharacters);
      return updatedCharacters;
    });
  };

  useEffect(() => {
    console.log("Personajes actualizados:", characters);
  }, [characters]);

  const isRootPath = window.location.pathname === '/';

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  };

  const handleLogout = () => {
    setAccess(false);
    setCharacters([]);
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


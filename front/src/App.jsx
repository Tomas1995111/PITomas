import React, { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import SearchBar from './components/SearchBar';
import Error404 from './components/Error404'; // Importa el componente Error404
import Form from './components/Form'; // Importa el componente Form

export default function App() {
  const [characters, setCharacters] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCharacters(filteredCharacters);
  };

  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-tomas1995111`)
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

  const onClose = (id) => {
    const updatedCharacters = characters.filter((character) => character.id !== String(id));
    setCharacters(updatedCharacters);
  };

  return (
    <div>
      <Nav />
      <SearchBar onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form />} /> {/* Ruta para renderizar el componente Form */}
        {/* Ruta comodín (*) para capturar rutas no coincidentes */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';

export default function App() {
  const [characters, setCharacters] = useState([]);

  // Función para buscar personajes
  const handleSearch = (searchTerm) => {
    // Lógica para buscar personajes según el término de búsqueda
    // Utiliza characters en lugar de Data
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Actualizar el estado con los personajes filtrados
    setCharacters(filteredCharacters);
  };

  // Nueva función para buscar personaje por ID utilizando Axios
  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-tomas1995111`).then(
      ({ data }) => {
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
  // Nueva función para filtrar personajes por ID y actualizar el estado
  const onClose = (id) => {
    // Filtrar personajes cuyo id sea diferente al id recibido por parámetro
    const updatedCharacters = characters.filter((character) => character.id !== String(id));

    // Actualizar el estado con los personajes filtrados
    setCharacters(updatedCharacters);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}
import React, { useState } from 'react';
import './styles/searchBar.css';

const AddCharacter = ({ onSearch }) => {
  const [id, setId] = useState(''); // Nuevo estado local id

  const handleChange = (event) => {
    setId(event.target.value); // Actualizar el estado id con el valor del input
  };

  const handleAddClick = () => {
    onSearch(id); // Pasar el estado id como argumento a la función onSearch
    setId(''); // Restablecer el estado id después de realizar la búsqueda
  };

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 826) + 1; // ID aleatorio entre 1 y 826
    onSearch(randomId.toString()); // Pasar el número aleatorio como argumento a la función onSearch
    setId(''); // Restablecer el estado id después de realizar la búsqueda
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={id} // Asignar el estado id como valor del input
        onChange={handleChange} // Pasar la función handleChange al evento onChange
      />
      <button onClick={handleAddClick}>Agregar</button>
      <button onClick={handleRandomClick}>Aleatorio</button>
    </div>
  );
};

export default AddCharacter;
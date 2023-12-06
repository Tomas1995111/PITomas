import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-tomas1995111`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );

    return () => setCharacter({});
  }, [id]);

  return (
    <div>
      <h2>Detalle del Personaje</h2>
      {character.id && <p>ID: {character.id}</p>}
      {character.name && <p>Nombre: {character.name}</p>}
      {character.status && <p>Estado: {character.status}</p>}
      {character.species && <p>Especie: {character.species}</p>}
      {character.gender && <p>Género: {character.gender}</p>}
      {character.origin && character.origin.name && (
        <p>Origen: {character.origin.name}</p>
      )}
      {character.image && <img src={character.image} alt={character.name} />}
    </div>
  );
};

export default Detail;
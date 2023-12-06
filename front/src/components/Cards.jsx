import React from 'react';
import Card from './Card';
import './styles/StyleCards.css';

export default function Cards({
  characters,
  onClose, // Pasar onClose como prop al componente Card
}) {
  return (
    <div className="card-container">
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id} // Añadir el id como propiedad al componente Card
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose} // Pasar onClose como prop al componente Card
        />
      ))}
    </div>
  );
}
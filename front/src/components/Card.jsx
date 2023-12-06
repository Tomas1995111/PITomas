import React from 'react';
import { Link } from 'react-router-dom'; // Importa la etiqueta Link
import './styles/StyleCard.css';

export function Badge({ info }) {
  return (
    <div className="badge">
      <span>{info}</span>
    </div>
  );
}

export function CardInfo({
  name, status, species,
  origin, gender
}) {
  return (
    <aside>
      <h2 id="titulo">{name}</h2>
      <div className="card__info">
        <Badge info={status} />
        <Badge info={species} />
        <Badge info={origin} />
        <Badge info={gender} />
      </div>
    </aside>
  );
}

export default function Card({
  id,
  name, status, species, gender,
  origin, image, onClose // Propiedad onClose pasada al componente Card
}) {
  return (
    <article className="card">
      <button
        className='btn'
        onClick={() => onClose(id)} // Llama a onClose con el id cuando se hace clic
      >
        X
      </button>

      <Link to={`/detail/${id}`} > {/* Utiliza la etiqueta Link con la ruta deseada */}
        <div className="card__img">
          <img src={image} alt={name} />
          <CardInfo
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
          />
        </div>
      </Link>
    </article>
  );
}
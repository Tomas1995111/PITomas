import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import './styles/StyleCard.css';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: id => dispatch(addFav(id)),
    removeFromFavorites: id => dispatch(removeFav(id))
  };
};

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites
  };
};

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

export function Card({
  id,
  name, status, species, gender,
  origin, image, onClose, addToFavorites, removeFromFavorites, myFavorites
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [id, myFavorites]);

  const handleFavorite = () => {
  console.log('Antes de handleFavorite - isFav:', isFav);
 
  if (isFav) {
    setIsFav(false);
    removeFromFavorites(id);
  } else {
    setIsFav(true);
    addToFavorites(id);
  }

  console.log('Después de handleFavorite - isFav:', isFav);
  console.log('myFavorites después de handleFavorite:', myFavorites);
};
  return (
    <article className="card">
<button
  className='btn'
  onClick={(e) => {
    e.stopPropagation();
    console.log('Cerrando tarjeta con ID:', id);
    onClose(id);
    console.log('Después de cerrar tarjeta con ID:', id);
  }}
>
  X
</button>

      <Link to={`/detail/${id}`}>
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

      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </article>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

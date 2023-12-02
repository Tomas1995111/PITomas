import Card from './Card';
import './styles/StyleCards.css';
export default function Cards({
  characters,
}) {
  console.log(characters)
  return (
    <div className="card-container">
        {characters.map((character) => (<Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
        /> ))}
    </div>
  )
}

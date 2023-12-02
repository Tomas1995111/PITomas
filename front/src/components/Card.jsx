import './styles/StyleCard.css'

export function Badge({ info }) {
  return (
    <div className="badge">
    <span>{info}</span>
  </div>
  )
}

export function CardInfo({
  name, status, species,
  origin, gender
}) {
  return (
    <aside>
      {/* El h2 va por el SEO */}
      <h2 id="titulo">{name}</h2>
      <div className="card__info">
        <Badge info={status} />
        <Badge info={species} />
        <Badge info={origin} />
        <Badge info={gender} />
      </div>
    </aside>
  )
}

export default function Card({
  name, status, species, gender,
  origin, image
}) {
  return (
    <article className="card">
      <button
        className='btn'
      >X</button>

      <div className="card__img">
        <img src={image} alt={name} />
        <CardInfo
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin} />
      </div>
    </article>
  )
}

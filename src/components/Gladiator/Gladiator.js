import './Gladiator.css';

export default function Gladiator({ pokemon, type_1, url_image, pokedex }) {
  return (
    <div className="gladCard">
      <img src={url_image}></img>
      <span>{pokemon}</span>
      <span>Type:{type_1}</span>
      <a href={pokedex}>Pokedex Entry</a>
    </div>
  );
}

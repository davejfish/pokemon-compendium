import './Gladiator.css';

export default function Gladiator({ 
  pokemon, 
  type_1, 
  type_2, 
  url_image, 
  pokedex,
  color_1,
}) {
  return (
    <div className="gladCard" style={{ backgroundColor: color_1 }}>
      <div className='imgBox'>
        <img className='contain' src={url_image}></img>
      </div>
      <span className='name'>{pokemon}</span>
      <span className='typeOne'>Type: {type_1}</span>
      <span className='typeTwo'>Type: {type_2}</span>
      <a className='pokeUrl' href={pokedex}>Pokedex Entry</a>
    </div>
  );
}

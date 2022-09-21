import './Gladiator.css';

export default function Gladiator({ pokemon, type_1, type_2 }) {
  return (
    <div className='gladCard'>
      <span>{pokemon}</span>
      <span>type:{type_1}</span>
      <span>type:{type_2}</span>
    </div>
  );
}
import { useGladiators } from '../../hooks/useGladiators';
import { Gladiator } from '../Gladiator/Gladiator.js';
import './Collection.css';

export default function Collection() {
  const { gladiators, error } = useGladiators();
  return (
    <div>
      <span>{error.length === 0 ? <>error</> : <></> }</span>
      <div>
        <Gladiator gladiators={gladiators} />
      </div>
      
      
    </div>

  ); 
}
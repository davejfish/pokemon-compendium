import { useGladiators } from '../../hooks/useGladiators';
import Gladiator from '../Gladiator/Gladiator.js';
import './Collection.css';

export default function Collection() {
  const { gladiators, error, loading } = useGladiators();
  return (
    <div>
      <span>{error.length === 0 ? <>{error}</> : <></>}</span>
      <span>{loading ? <>loading...</> : <></>}</span>
      <div className="collection">
        {gladiators.map((gladiator) => (
          <Gladiator key={gladiator.id} {...gladiator} />
        ))}
      </div>
    </div>
  );
}

import { useGladiators } from '../../hooks/useGladiators';
import Select from '../Controls/Select';
import Gladiator from '../Gladiator/Gladiator.js';

import './Collection.css';

export default function Collection() {
  const { gladiators, error, loading, types, setSelectedType } = useGladiators();
  return (
    <div>
      <span>{error.length === 0 ? <>{error}</> : <></>}</span>
      <span>{loading ? <>loading...</> : <></>}</span>
      <Select options={types} changeHandler={setSelectedType} />
      <div className="collection">
        {gladiators.map((gladiator) => (
          <Gladiator key={gladiator.id} {...gladiator} />
        ))}
      </div>
    </div>
  );
}

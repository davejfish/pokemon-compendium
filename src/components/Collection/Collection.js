import { useGladiators } from '../../hooks/useGladiators';
import Select from '../Controls/Select';
import Gladiator from '../Gladiator/Gladiator.js';
import Pokeball from '../Pokeball/Pokeball';
import Search from '../Search/Search';

import './Collection.css';

export default function Collection() {
  const { gladiators, error, loading, types, setSelectedType, setName } = useGladiators();
  return (
    <div className="main">
      <span>{loading ? <Pokeball /> : <></>}</span>
      <h2 className="title">gladiator collection</h2>
      <span>{error.length === 0 ? <>{error}</> : <></>}</span>
      <div className="controls">
        <Select options={types} changeHandler={setSelectedType} />
        <Search queryHandler={setName} />
      </div>
      <div className="collection">
        {gladiators.map((gladiator) => (
          <Gladiator key={gladiator.id} {...gladiator} />
        ))}
      </div>
    </div>
  );
}

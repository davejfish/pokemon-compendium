import { useGladiators } from '../../hooks/useGladiators';
import Select from '../Controls/Select';
import Gladiator from '../Gladiator/Gladiator.js';
import Search from '../Search/Search';

import './Collection.css';

export default function Collection() {
  const { gladiators, error, loading, types, setSelectedType } = useGladiators();
  return (
    <div>
      <span>{error.length === 0 ? <>{error}</> : <></>}</span>
      <span>{loading ? <>loading...</> : <></>}</span>
      <div className='controls'>
        <Select options={types} changeHandler={setSelectedType} />
        <Search />
      </div>
      <div className="collection">
        {gladiators.map((gladiator) => (
          <Gladiator key={gladiator.id} {...gladiator} />
        ))}
      </div>
    </div>
  );
}

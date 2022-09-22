import './Select.css';

export default function Select({ options, changeHandler }) {
  return (
    <select className='typeSelect' onChange={(e) => changeHandler(e.target.value)}>
      <option value="all">all</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

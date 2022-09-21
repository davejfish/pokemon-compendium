
export default function Gladiator({ gladiators }) {
  return (
    <div className='gladCard'>
      {gladiators.map((gladiator) => {
        <span key={gladiator.id}>{gladiator.pokemon}</span>;
      })}
    </div>
  );
}

import './Search.css';

export default function Search({ queryHandler }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    const query = formData.get('input');
    queryHandler(query);
  };

  return (
    <form onSubmit={(e) => {handleSubmit(e);}}>
      <label>
        Search
        <input name="input"></input>
        <button>Submit</button>
      </label>
    </form>
  );
}

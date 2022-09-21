export async function fetchGladiators() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
  const data = await response.json();
  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}

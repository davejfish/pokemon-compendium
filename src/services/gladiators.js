export async function fetchGladiators() {
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex`
  );
  const data = await response.json();
  return data.results;
}
import { checkError } from './client';

export async function fetchGladiators() {

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex`
  );
  const data = response.json();
  return checkError(data);
}
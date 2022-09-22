export async function fetchGladiators(selectedType, name) {
  const params = new URLSearchParams();

  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }

  if (name !== '') {
    params.set('pokemon', name);
  }

  const response = await fetch(`
    https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}
  `);
  const data = await response.json();
  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}

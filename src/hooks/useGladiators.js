import { useEffect, useState } from 'react';
import { fetchGladiators } from '../services/gladiators';

export function useGladiators() {
  const [gladiators, setGladiators] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetchGladiators();
        setGladiators(response);
      } catch (e) {
        setError(e.message);
      }
    };
    loadData();
  }, []);

  return { gladiators, error };
}
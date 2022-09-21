import { useEffect, useState } from 'react';
import { fetchGladiators } from '../services/gladiators';

export function useGladiators() {
  const [gladiators, setGladiators] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchGladiators();
        setGladiators(response);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { gladiators, error, loading };
}

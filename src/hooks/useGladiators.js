import { useEffect, useState } from 'react';
import { fetchGladiators, fetchTypes } from '../services/gladiators';

export function useGladiators() {
  const [gladiators, setGladiators] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const [types, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchGladiators(selectedType);
        setGladiators(response);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, [selectedType]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await fetchTypes();
        setType(data.map((type) => type.type));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadTypes();
  }, []);

  return { gladiators, error, loading, types, setSelectedType };
}

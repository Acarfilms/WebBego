import { useState, useEffect } from 'react';
import { ref, listAll } from 'firebase/storage';
import { storage } from '../config/firebase';
import { sortThemes } from '../utils/themeSorting';

interface Theme {
  name: string;
  path: string;
}

export const useFirebaseThemes = (seccion: string) => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchThemes = async () => {
      if (!seccion) {
        setLoading(false);
        return;
      }

      try {
        const sectionRef = ref(storage, `${seccion}`);
        const result = await listAll(sectionRef);
        
        if (!mounted) return;

        const themesList = result.prefixes.map(prefix => ({
          name: prefix.name,
          path: prefix.fullPath
        }));

        // Ordenar los temas usando la utilidad de ordenamiento
        const sortedThemes = sortThemes(themesList);

        setThemes(sortedThemes);
        setError(null);
      } catch (err) {
        console.error('Error fetching themes:', err);
        if (!mounted) return;
        setError('No se pudieron cargar los temas. Por favor, inténtalo de nuevo.');
        setThemes([]);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    setLoading(true);
    fetchThemes();
    return () => { mounted = false; };
  }, [seccion]);

  return { themes, loading, error };
};
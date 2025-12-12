import { useState, useEffect } from 'react';
import { ref, listAll, StorageReference } from 'firebase/storage';
import { storage } from '../config/firebase';
import type { FileItem, StorageHookResult } from '../types/firebase';

export const useFirebaseStorage = (path: string): StorageHookResult => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchFiles = async () => {
      if (!path) {
        setFiles([]);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const storageRef = ref(storage, path);
        const result = await listAll(storageRef);
        
        if (!mounted) return;

        const filesData = result.items.map((item: StorageReference) => ({
          name: item.name,
          path: item.fullPath
        }));

        setFiles(filesData);
      } catch (err) {
        if (!mounted) return;
        console.error('Error fetching files:', err);
        setError('No se pudieron cargar los archivos. Por favor, inténtalo de nuevo.');
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchFiles();
    return () => { mounted = false; };
  }, [path]);

  return { files, loading, error };
};
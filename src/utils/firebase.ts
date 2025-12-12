import { StorageReference, getDownloadURL, ref } from 'firebase/storage';
import { storage, auth } from '../config/firebase';

export const getFileWithRetry = async (
  fileRef: StorageReference,
  maxRetries = 3,
  delay = 1000
): Promise<string> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await getDownloadURL(fileRef);
    } catch (error: any) {
      console.error(`Intento ${attempt} fallido:`, error);
      
      if (error.code === 'storage/unauthorized') {
        throw new Error('No tienes permiso para acceder a este archivo');
      }
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  throw new Error('No se pudo obtener la URL del archivo');
};

export const getAuthenticatedUrl = async (path: string): Promise<string> => {
  try {
    if (!auth.currentUser) {
      throw new Error('Debes iniciar sesión para acceder a los archivos');
    }

    const fileRef = ref(storage, path);
    const url = await getDownloadURL(fileRef);
    
    if (!url) {
      throw new Error('No se pudo obtener la URL del archivo');
    }
    
    return url;
  } catch (error: any) {
    console.error('Error al obtener URL autenticada:', error);
    
    if (error.code === 'storage/object-not-found') {
      throw new Error('El archivo no existe');
    }
    
    if (error.code === 'storage/unauthorized') {
      throw new Error('No tienes permiso para acceder a este archivo');
    }
    
    throw new Error('Error al acceder al archivo');
  }
};
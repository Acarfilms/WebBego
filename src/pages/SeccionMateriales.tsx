import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileText, FolderOpen, Eye, Download, ExternalLink } from 'lucide-react';
import { useFirebaseThemes } from '../hooks/useFirebaseThemes';
import { useFirebaseStorage } from '../hooks/useFirebaseStorage';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { PDFViewer } from '../components/PDFViewer';
import { getAuthenticatedUrl } from '../utils/firebase';

export const SeccionMateriales = () => {
  const { seccion } = useParams<{ seccion: string }>();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [viewingPDF, setViewingPDF] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { themes, loading: loadingThemes, error: themesError } = useFirebaseThemes(seccion || '');
  const { files, loading: loadingFiles, error: filesError } = useFirebaseStorage(selectedTheme || '');
  useScrollToTop(selectedTheme);

  const handleView = async (filePath: string) => {
    try {
      setLoading(true);
      setError(null);
      const url = await getAuthenticatedUrl(filePath);
      setViewingPDF(url);
    } catch (err: any) {
      console.error('Error al visualizar archivo:', err);
      setError(err.message || 'Error al visualizar el archivo');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (filePath: string, fileName: string) => {
    try {
      setLoading(true);
      setError(null);
      const url = await getAuthenticatedUrl(filePath);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al descargar el archivo');
      }
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err: any) {
      console.error('Error al descargar archivo:', err);
      setError(err.message || 'Error al descargar el archivo');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenInNewTab = async (filePath: string) => {
    try {
      setLoading(true);
      setError(null);
      const url = await getAuthenticatedUrl(filePath);
      window.open(url, '_blank');
    } catch (err: any) {
      console.error('Error al abrir archivo:', err);
      setError(err.message || 'Error al abrir el archivo');
    } finally {
      setLoading(false);
    }
  };

  if (!seccion) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-red-600 dark:text-red-400">Sección no válida</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
        Materiales de {seccion.charAt(0).toUpperCase()}{seccion.slice(1)}
      </h1>

      {(error || themesError || filesError) && (
        <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg animate-shake">
          {error || themesError || filesError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Lista de temas */}
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-slide-up">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Temas</h2>
            {loadingThemes ? (
              <div className="py-4">
                <LoadingSpinner />
              </div>
            ) : themes.length > 0 ? (
              <div className="space-y-2">
                {themes.map((theme, index) => (
                  <button
                    key={theme.path}
                    onClick={() => setSelectedTheme(theme.path)}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center transition-all duration-200 ${
                      selectedTheme === theme.path
                        ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <FolderOpen className="h-5 w-5 mr-2" />
                    <span className="dark:text-gray-300">{theme.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-4">
                No se encontraron temas
              </div>
            )}
          </div>
        </div>

        {/* Contenido del tema */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
            {selectedTheme ? (
              <>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedTheme.split('/').pop()}
                </h2>
                {loadingFiles ? (
                  <div className="py-12">
                    <LoadingSpinner />
                  </div>
                ) : files.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{file.name}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleView(file.path)}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                            title="Ver archivo"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDownload(file.path, file.name)}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                            title="Descargar archivo"
                          >
                            <Download className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleOpenInNewTab(file.path)}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                            title="Abrir en nueva pestaña"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-4">
                    No se encontraron archivos en este tema
                  </div>
                )}
              </>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                Selecciona un tema para ver su contenido
              </div>
            )}
          </div>
        </div>
      </div>

      {viewingPDF && (
        <PDFViewer url={viewingPDF} onClose={() => setViewingPDF(null)} />
      )}

      {loading && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};
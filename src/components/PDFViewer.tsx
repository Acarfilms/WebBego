import React from 'react';
import { X } from 'lucide-react';

interface PDFViewerProps {
  url: string;
  onClose: () => void;
}

export const PDFViewer = ({ url, onClose }: PDFViewerProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-lg shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe
          src={`${url}#toolbar=0`}
          className="w-full h-full rounded-lg"
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};
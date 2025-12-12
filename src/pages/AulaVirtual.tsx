import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users } from 'lucide-react';

export const AulaVirtual = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
        Aula Virtual
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link 
          to="/aula-virtual/administracion"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-900/50 transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
        >
          <BookOpen className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Administración</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
            Accede a todos los materiales para oposiciones de Administración
          </p>
        </Link>

        <Link 
          to="/aula-virtual/profesorado"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-900/50 transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
          style={{ animationDelay: '150ms' }}
        >
          <Users className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profesorado</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
            Accede a todos los materiales para oposiciones de Profesorado
          </p>
        </Link>
      </div>
    </div>
  );
};
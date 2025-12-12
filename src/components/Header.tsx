import React from 'react';
import { GraduationCap, LogOut, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export const Header = () => {
  const { currentUser, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <GraduationCap className="h-8 w-8 text-indigo-600 dark:text-indigo-400 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Profe Bego</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {currentUser ? (
              <>
                <span className="text-gray-700 dark:text-gray-300">{currentUser.displayName}</span>
                <Link
                  to="/aula-virtual"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transform hover:scale-105 transition-transform duration-200"
                >
                  Aula Virtual
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transform hover:scale-105 transition-transform duration-200"
              >
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl"></div>
      </div>
    </header>
  );
};
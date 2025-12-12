import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase mb-4">
              Contacto
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Email: info@profebego.com
              <br />
              Teléfono: +34 689 359 528
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacidad"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-400 dark:text-gray-500 text-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
            © 2024 ProfeBego. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
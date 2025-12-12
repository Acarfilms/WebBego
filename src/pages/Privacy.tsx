import React from 'react';
import { Footer } from '../components/Footer';

export const Privacy = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-indigo max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Información que recopilamos</h2>
          <p className="text-gray-600 mb-4">
            Recopilamos información personal que usted nos proporciona directamente, incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Información de la cuenta</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Cómo utilizamos su información</h2>
          <p className="text-gray-600 mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Proporcionar y mantener nuestros servicios</li>
            <li>Personalizar su experiencia</li>
            <li>Comunicarnos con usted</li>
            <li>Mejorar nuestros servicios</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Seguridad</h2>
          <p className="text-gray-600 mb-4">
            Nos tomamos muy en serio la seguridad de sus datos personales y empleamos medidas 
            técnicas y organizativas apropiadas para proteger su información.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Sus derechos</h2>
          <p className="text-gray-600 mb-4">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            <li>Acceder a sus datos personales</li>
            <li>Rectificar sus datos</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de sus datos</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contacto</h2>
          <p className="text-gray-600 mb-4">
            Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos en:
            info@profebego.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
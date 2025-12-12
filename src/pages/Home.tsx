import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Target, Clock, Award, CheckCircle, Star, Sparkles, Rocket } from 'lucide-react';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Tu éxito en oposiciones</span>
              <span className="block text-indigo-600 dark:text-indigo-400">comienza aquí</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Preparación personalizada y efectiva para conseguir tu plaza en Administración o Profesorado
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
                  title: "Experiencia Docente",
                  description: "Más de 15 años formando opositores con éxito demostrado"
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
                  title: "Material Actualizado",
                  description: "Contenido siempre al día con la última normativa y requisitos"
                },
                {
                  icon: <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
                  title: "Atención Personalizada",
                  description: "Seguimiento individual y adaptado a tu ritmo de estudio"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* About Me Section */}
          <div className="mt-24 bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">¿Quién soy?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Soy Begoña, profesora y preparadora de oposiciones con más de 15 años de experiencia. 
                  Mi pasión es ayudar a personas como tú a alcanzar sus metas profesionales en la 
                  administración pública y la docencia.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Mi método se basa en una preparación integral, combinando materiales actualizados, 
                  técnicas de estudio efectivas y un seguimiento personalizado para garantizar tu éxito.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">¿Por qué elegirme?</h3>
                  <ul className="space-y-3">
                    {[
                      'Alta tasa de aprobados entre mis alumnos',
                      'Materiales constantemente actualizados',
                      'Atención personalizada y seguimiento continuo',
                      'Grupos reducidos para mejor atención',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-96">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/profebego-web.firebasestorage.app/o/Fotos-Web%2FPXL_20241109_143727135.PORTRAIT.jpg?alt=media&token=de4bd1bc-41fd-49f9-a260-5d25415c9554"
                  alt="Profesora explicando"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Metodología Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Nuestra Metodología
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Excelencia Académica",
                  description: "Materiales de estudio cuidadosamente seleccionados y actualizados"
                },
                {
                  icon: <Sparkles className="w-8 h-8 text-purple-400" />,
                  title: "Innovación Continua",
                  description: "Métodos de enseñanza adaptados a las últimas tendencias educativas"
                },
                {
                  icon: <Rocket className="w-8 h-8 text-blue-400" />,
                  title: "Progreso Garantizado",
                  description: "Sistema de seguimiento personalizado para maximizar tu rendimiento"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Comienza tu camino hacia el éxito
            </h2>
            <Link
              to="/registro"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200"
            >
              Empieza ahora
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { PrivateRoute } from './components/PrivateRoute';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AulaVirtual } from './pages/AulaVirtual';
import { SeccionMateriales } from './pages/SeccionMateriales';
import { Privacy } from './pages/Privacy';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-200">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/privacidad" element={<Privacy />} />
                <Route
                  path="/aula-virtual"
                  element={
                    <PrivateRoute>
                      <AulaVirtual />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/aula-virtual/:seccion"
                  element={
                    <PrivateRoute>
                      <SeccionMateriales />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
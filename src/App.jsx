import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './components/layout/Dashboard';
import Login from './views/Login';
import RutaProtegida from './components/RutaProtegida';


const App = () => {
  return (
    <Routes>
              {/* Ruta pública para iniciar sesión. JuanAr */}
              <Route path="/login" element={<Login />} />

              {/* Ruta protegida: requiere autenticación para acceder al Dashboard. JuanAr */}
              <Route
                path="/"
                element={
                  <RutaProtegida>
                    <Dashboard />
                  </RutaProtegida>
                }
              />

              {/* Redirige rutas inexistentes al inicio de la aplicación. JuanAr */}
              <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
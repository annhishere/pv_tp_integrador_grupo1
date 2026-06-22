import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './components/layout/Dashboard';
import Logins from './views/Login';
import RutaProtegida from './views/RutaProtegida';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Logins />} />

      <Route path="/" element={
          <RutaProtegida>
            <Dashboard />
          </RutaProtegida>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
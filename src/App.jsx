import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAdmin } from './context/AdminContext';
import Dashboard from './components/layout/Dashboard';
import Login from './views/Login';
// por si no se abre sesion
const RutaProtegida = ({children}) => {
  const {admin} = useAdmin();
  return admin ? children : <Navigate to="/login" replace/>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<RutaProtegida> <Dashboard /> </RutaProtegida>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
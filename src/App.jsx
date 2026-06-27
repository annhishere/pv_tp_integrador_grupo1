import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./components/layout/Dashboard";
import RutaProtegida from "./components/RutaProtegida";
import Login from "./views/Login";
import ListaClientes from './views/ListaClientes';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/global.css";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RutaProtegida>
            <Dashboard />
          </RutaProtegida>
        }
      />
      {/* Ruta para la lista de clientes. Jonatan */}
      <Route
        path="/clientes"
        element={
          <RutaProtegida>
            <ListaClientes />
          </RutaProtegida>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
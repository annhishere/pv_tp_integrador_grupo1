import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./components/layout/Dashboard";
import RutaProtegida from "./components/RutaProtegida";
import Login from "./views/Login";
import ListaClientes from './views/ListaClientes';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/global.css";
import { Link } from "react-router-dom"; // Importo Link para navegar a la ficha completa de cada cliente desde la lista. JuanAr
import DetalleCliente from "./views/DetalleCliente"; //Importo la vista de detalle del cliente. JuanAr


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
            {/* Ruta dinámica para mostrar la ficha completa de un cliente por ID. JuanAr */}
      <Route
        path="/clientes/:id"
        element={
        <RutaProtegida>
            <DetalleCliente />
        </RutaProtegida>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
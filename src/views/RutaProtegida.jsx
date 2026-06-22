import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

const RutaProtegida = ({ children }) => {
  // Obtenemos el estado admin desde el contexto
  const { admin } = useContext(AdminContext);

  // Si admin es null, significa que no hay un administrador logueado
  if (admin === null) {
    // Redirige obligatoriamente al usuario a la pantalla de login
    return <Navigate to="/login" replace />;
  }

  // Si admin tiene datos, permite mostrar la ruta protegida
  return children;
};

export default RutaProtegida;
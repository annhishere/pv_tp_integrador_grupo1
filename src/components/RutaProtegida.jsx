import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

const RutaProtegida = ({ children }) => {
  // Obtengo el administrador autenticado desde el contexto global. JuanAr
const { admin } = useAdmin();

  // Si no existe administrador logueado, redirijo automáticamente al login. JuanAr
if (!admin) {
    return <Navigate to="/login" replace />;
}

  // Si existe sesión activa, permito ver el contenido protegido. JuanAr
return children;
};

export default RutaProtegida;
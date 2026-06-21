import { createContext, useEffect, useState } from "react";

// Creamos el contexto
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

  // Si existe una sesión guardada, la recuperamos
  const [admin, setAdmin] = useState(() => {
    const adminGuardado = localStorage.getItem("admin");
    return adminGuardado ? JSON.parse(adminGuardado) : null;
  });

  // Guarda automáticamente los cambios en localStorage
  useEffect(() => {

    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin");
    }

  }, [admin]);

  // Iniciar sesión
  const login = (nombre, sector) => {

    setAdmin({
      nombre,
      sector
    });
  };

  // Cerrar sesión
  const logout = () => {
    setAdmin(null);
  };

  return (
    <AdminContext.Provider
      value={{
        admin,
        login,
        logout
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
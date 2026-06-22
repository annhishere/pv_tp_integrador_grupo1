import { createContext, useEffect, useState, useContext } from "react";

// Creamos el contexto
export const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin debe usarse dento de <AdminProvider>");
  }
  return context;
};

export const AdminProvider = ({ children }) => {

  // Si existe una sesión guardada, la recuperamos
  const [admin, setAdmin] = useState(() => {
    //try-catch para que no se rompa el localstorage por datos corruptos
    try{
      const adminGuardado = localStorage.getItem("admin");
      return adminGuardado ? JSON.parse(adminGuardado) : null;
    }catch{
      return null;
    }
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
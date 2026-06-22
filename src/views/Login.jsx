import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";
import "../components/styles/Login.css";

const Login = () => {
  // Obtenemos la funcion login desde el contexto de administrador
  const { login } = useContext(AdminContext);

  // Hook de React Router para redirigir al usuario a otra ruta
  const navigate = useNavigate();

  // Estado para guardar el nombre ingresado en el input
  const [nombre, setNombre] = useState("");

  // Estado para guardar el sector seleccionado en el menu desplegable
  const [sector, setSector] = useState("Soporte");

  // Funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (e) => {
    // Evita que el formulario recargue la pagina
    e.preventDefault();

    // Guarda los datos del administrador en el contexto
    login(nombre, sector);

    // Redirige al usuario a la pantalla principal
    navigate("/");
  };

  return (
    <div className="login-container">
      {/* Formulario de inicio de sesion */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login de Administrador</h2>

        <div className="login-field">
          <label>Nombre del Administrador</label>

          {/* Input controlado por el estado nombre */}
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre"
            required
          />
        </div>

        <div className="login-field">
          <label>Sector de la Empresa</label>

          {/* Select controlado por el estado sector */}
          <select value={sector} onChange={(e) => setSector(e.target.value)}>
            <option value="Soporte">Soporte</option>
            <option value="Gerencia">Gerencia</option>
          </select>
        </div>

        <button className="login-btn" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
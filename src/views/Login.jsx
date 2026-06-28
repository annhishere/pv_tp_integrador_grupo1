import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
<<<<<<< HEAD
=======
// componentes 
import InputField from "../components/common/InputField";
import SelectField from "../components/common/SelectField";
import FormContainer from "../components/common/FormContainer";
>>>>>>> origin/Juan_Arze
import "../components/styles/Login.css";

const Login = () => {
  // Obtenemos la funcion login desde el contexto de administrador
  const { login } = useAdmin();

  // Hook de React Router para redirigir a otra pagina
  const navigate = useNavigate();
<<<<<<< HEAD

  // Estado para guardar el nombre escrito en el input
  const [nombre, setNombre] = useState("");

  // Estado para guardar el sector seleccionado
  const [sector, setSector] = useState("");

  // Estado para mostrar mensajes de error en el formulario
  const [error, setError] = useState("");

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    // Evita que la pagina se recargue
    e.preventDefault();

    // Validamos que los campos no esten vacios
    if (!nombre.trim() || !sector) {
      setError("Completa todos los campos");
      return;
    }

    // Guardamos los datos del administrador en el contexto
    login(nombre.trim(), sector);

    // Redirigimos al usuario a la pagina principal
    navigate("/");
  };

  return (
    <div className="login-container">
      {/* Formulario de inicio de sesion */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>NOCTURNE</h2>
        <p>Panel de Administracion</p>

        {/* Mensaje de error, solo se muestra si existe un error */}
        {error && <div className="login-error">{error}</div>}

        <div className="login-field">
          <label>Nombre del Administrador</label>

          {/* Input controlado por el estado nombre */}
          <input
            type="text"
            placeholder="Ingresa Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="login-field">
          <label>Sector</label>

          {/* Select controlado por el estado sector */}
          <select value={sector} onChange={(e) => setSector(e.target.value)}>
            <option value="">Selecciona un sector</option>
            <option value="Soporte">Soporte</option>
            <option value="Gerencia">Gerencia</option>
          </select>
        </div>

        {/* Boton para enviar el formulario */}
        <button className="login-btn" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
=======

  // Estado para guardar el nombre escrito en el input
  const [nombre, setNombre] = useState("");

  // Estado para guardar el sector seleccionado
  const [sector, setSector] = useState("");

  // Estado para mostrar mensajes de error en el formulario
  const [error, setError] = useState("");

  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    // Evita que la pagina se recargue
    e.preventDefault();

    // Validamos que los campos no esten vacios
    if (!nombre.trim() || !sector) {
      setError("Completa todos los campos");
      return;
    }

    // Guardamos los datos del administrador en el contexto
    login(nombre.trim(), sector);

    // Redirigimos al usuario a la pagina principal
    navigate("/");
  };

  return (

    <FormContainer>

      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="login-video"
      >
        <source src="src/assets/video/video.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="login-overlay"></div>

      {/* Tarjeta del formulario */}
      <div className="login-card">

        {/* Formulario de inicio de sesion */}
        <form className="login-form" onSubmit={handleSubmit}>

          <span className="login-subtitle">
            THE NEW
          </span>

          <h2>NOCTURNE</h2>

          <p>Panel de Administración</p>

          {/* Mensaje de error, solo se muestra si existe un error */}
          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <InputField
            label="Nombre del Administrador"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <SelectField
            label="Sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            options={[
              {
                value: "",
                label: "Selecciona un sector",
              },
              {
                value: "Soporte",
                label: "Soporte",
              },
              {
                value: "Gerencia",
                label: "Gerencia",
              },
            ]}
          />

          {/* Boton para enviar el formulario */}
          <button
            className="login-btn"
            type="submit"
          >
            Ingresar
          </button>

        </form>

      </div>

    </FormContainer>

  );

>>>>>>> origin/Juan_Arze
};

export default Login;
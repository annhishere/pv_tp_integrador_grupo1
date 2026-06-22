import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
// componentes 
import InputField from "../components/common/InputField";
import SelectField from "../components/common/SelectField";
import FormContainer from "../components/common/FormContainer";
import "../components/styles/Login.css";

const Login = () => {
  // Obtenemos la funcion login desde el contexto de administrador
  const { login } = useAdmin();

  // Hook de React Router para redirigir a otra pagina
  const navigate = useNavigate();

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
      {/* Formulario de inicio de sesion */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>NOCTURNE</h2>
        <p>Panel de Administracion</p>

        {/* Mensaje de error, solo se muestra si existe un error */}
        {error && <div className="login-error">{error}</div>}

        <InputField
          label="Nombre del Administrador"
          placeholder="Ingresa Nombre"
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
        <button className="login-btn" type="submit">
          Ingresar
        </button>
      </form>
    </FormContainer>
  );
};

export default Login;
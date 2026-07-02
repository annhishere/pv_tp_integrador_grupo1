import { useState } from "react";

// Componentes de React Bootstrap (Módulo C, Ariana)
import { Form, Button, Alert } from "react-bootstrap";

import "../styles/FormAltaCliente.css";

const FormAltaCliente = ({ agregarCliente }) => {

    // Estados de cada campo del formulario (Módulo C, Ariana)

    const [nombre, setNombre] = useState("");

    const [apellido, setApellido] = useState("");

    const [email, setEmail] = useState("");

    const [telefono, setTelefono] = useState("");

    const [ciudad, setCiudad] = useState("");

    // Estado para mostrar el mensaje de éxito (Módulo C, Ariana)
    const [mensaje, setMensaje] = useState("");

    // Función que envía los datos a FakeStoreAPI mediante una petición POST (Módulo C, Ariana)

    const crearCliente = async (e) => {

        e.preventDefault();

        // Objeto que se enviará a la API (Módulo C, Ariana)
        const nuevoCliente = {

            email: email,

            username: nombre.toLowerCase(),

            password: "123456",

            name: {
                firstname: nombre,
                lastname: apellido
            },

            address: {
                city: ciudad
            },

            phone: telefono

        };

        try {

            // Petición POST hacia FakeStoreAPI (Módulo C, Ariana)
            const respuesta = await fetch(
                "https://fakestoreapi.com/users",
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(nuevoCliente)

                }
            );

            const datos = await respuesta.json();

            // Creo un objeto con la misma estructura que utilizan las Cards (Módulo C, Ariana)
            const clienteCreado = {

                id: datos.id,

                email: email,

                phone: telefono,

                name: {
                    firstname: nombre,
                    lastname: apellido
                },

                address: {
                    city: ciudad
                }

            };

            // Agrego el nuevo cliente a la lista sin recargar la página (Módulo C, Ariana)
            agregarCliente(clienteCreado);

            // Muestro el ID generado por la API (Módulo C, Ariana)
            setMensaje(`Cliente creado correctamente. ID asignado: ${datos.id}`);

            // Oculto el mensaje luego de 3 segundos (Módulo C, Ariana)
            setTimeout(() => {

                setMensaje("");

            }, 3000);

            // Limpio el formulario (Módulo C, Ariana)
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            setCiudad("");

        }

        catch (error) {

            setMensaje("Ocurrió un error al crear el cliente.");

        }

    };

    return (

        <div className="form-alta">

            <h3>Nuevo Cliente</h3>

            {

                mensaje &&

                <Alert variant="success">

                    {mensaje}

                </Alert>

            }

            <Form onSubmit={crearCliente}>

                <Form.Group className="mb-3">

                    <Form.Label>Nombre</Form.Label>

                    <Form.Control

                        value={nombre}

                        onChange={(e) => setNombre(e.target.value)}

                        required

                    />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>Apellido</Form.Label>

                    <Form.Control

                        value={apellido}

                        onChange={(e) => setApellido(e.target.value)}

                        required

                    />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>Email</Form.Label>

                    <Form.Control

                        type="email"

                        value={email}

                        onChange={(e) => setEmail(e.target.value)}

                        required

                    />

                </Form.Group>

                <Form.Group className="mb-3">

                    <Form.Label>Teléfono</Form.Label>

                    <Form.Control

                        value={telefono}

                        onChange={(e) => setTelefono(e.target.value)}

                        required

                    />

                </Form.Group>

                <Form.Group className="mb-4">

                    <Form.Label>Ciudad</Form.Label>

                    <Form.Control

                        value={ciudad}

                        onChange={(e) => setCiudad(e.target.value)}

                        required

                    />

                </Form.Group>

                <Button

                    type="submit"

                    className="w-100"

                >

                    Crear Cliente

                </Button>

            </Form>

        </div>

    );

};

export default FormAltaCliente;
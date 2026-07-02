import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Alert, Button, Card, Container, Spinner } from "react-bootstrap";

const DetalleCliente = () => {
    // Capturo el id dinámico que viene en la URL /clientes/:id. JuanAr
    const { id } = useParams();

    // Estado para guardar los datos del cliente obtenido por ID. JuanAr
    const [cliente, setCliente] = useState(null);

    // Estado para controlar la carga mientras se realiza el segundo fetch. JuanAr
    const [cargando, setCargando] = useState(true);

    // Estado para guardar errores si falla la petición por ID. JuanAr
    const [error, setError] = useState(null);

    // Función asincrónica que consulta la API usando el ID recibido por URL. JuanAr
    const obtenerClientePorId = async () => {
        try {
            setCargando(true);
            setError(null);

            // Realizo el segundo fetch hacia la API con el id dinámico. JuanAr
            const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);

            if (!respuesta.ok) {
                throw new Error("No se pudo obtener la ficha del cliente");
            }

            const datos = await respuesta.json();

            // Guardo en el estado el cliente recibido desde la API. JuanAr
            setCliente(datos);
        } catch (error) {
            setError(error.message);
        } finally {
            setCargando(false);
        }
    };

    // Ejecuto el fetch cada vez que cambia el id de la URL. JuanAr
    useEffect(() => {
        obtenerClientePorId();
    }, [id]);

    // Muestro un spinner mientras se carga la ficha del cliente. JuanAr
    if (cargando) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" />
                <p className="mt-3">Cargando ficha del cliente...</p>
            </Container>
        );
    }

    // Muestro un error si falla el fetch por ID. JuanAr
    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">{error}</Alert>
                <Link to="/clientes">Volver a clientes</Link>
            </Container>
        );
    }

    // Si no existe cliente, muestro un mensaje alternativo. JuanAr
    if (!cliente) {
        return (
            <Container className="mt-4">
                <Alert variant="warning">Cliente no encontrado</Alert>
                <Link to="/clientes">Volver a clientes</Link>
            </Container>
        );
    }
    //DESESTRUCTURACION
    //objeto anidado name. Jonatan
    const {lastname, firstname} = cliente.name;
    //objeto anidado address. Jonatan
    const {street, number, zipcode, city} = cliente.address;
    //datos. Jonatan
    const {username, password, email, phone} = cliente;  

    return (
        <Container className="mt-5">
            <Card className="shadow">
                <Card.Body>
                    {/* Muestro el título de la ficha completa del cliente. JuanAr */}
                    <Card.Title>
                        Ficha completa del cliente #{id}
                    </Card.Title>

                    {/* Muestro datos básicos obtenidos desde el segundo fetch. JuanAr */}
                    <Card.Text>
                        <strong>Nombre:</strong>{" "}
                        {firstname} {lastname}
                    </Card.Text>

                    <Card.Text>
                        <strong>Email:</strong> {email}
                    </Card.Text>

                    <Card.Text>
                        <strong>Teléfono:</strong> {phone}
                    </Card.Text>

                    {/* Muestra el objeto anidado address. Jonatan */}
                    <div className="cliente-direccion">
                        <Card.Text>
                            <strong>Direccion:</strong> {street} {number}
                        </Card.Text>
                        <Card.Text>
                            <strong>Código Postal:</strong> {zipcode}
                        </Card.Text>
                        <Card.Text>
                            <strong>Ciudad:</strong> {city}
                        </Card.Text>
                    </div>
                    
                    {/* Muestra las credenciales. Jonatan */}
                    <div className="cliente-credenciales">
                        <Card.Text>
                            <strong>Usuario:</strong> {username}
                        </Card.Text>
                        <Card.Text>
                            <strong>Contraseña:</strong> {password}
                        </Card.Text>
                    </div>
                    {/* Botón para volver a la lista de clientes. JuanAr */}
                    <Button as={Link} to="/clientes" variant="secondary">
                        Volver a clientes
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DetalleCliente;
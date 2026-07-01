import { useEffect, useState } from "react";

// Importo componentes de Bootstrap para mostrar los clientes en tarjetas. JuanAr
import { Alert, Card, Row, Col, Container, Spinner } from "react-bootstrap";

import SearchBar from "../components/common/SearchBar";

import videoClientes from "../assets/video/video2.mp4";

import "../components/styles/Clientes.css";

const ListaClientes = () => {

    // Estado donde se guardarán los clientes obtenidos desde la API
    const [clientes, setClientes] = useState([]);

    // Estado del buscador
    const [busqueda, setBusqueda] = useState("");

    // Estado para controlar la carga de datos desde la API .MB-3
    const [cargando, setCargando] = useState(true);

    // Estado para guardar un posible error al consumir la API .MB-3
    const [error, setError] = useState(null);

    // Consumo principal de la API .MB-3
    const obtenerClientes = async () => {

        try { //try se ejecuta si todo sale bien, catch se ejecuta si hay un error, finally se ejecuta siempre

            setCargando(true);
            setError(null);

            const respuesta = await fetch("https://fakestoreapi.com/users");

            if (!respuesta.ok) {
                throw new Error(`Error ${respuesta.status}: no se pudo obtener la lista de clientes`);
            }

            const datos = await respuesta.json();

            setClientes(datos);

        } catch (error) {

             setError(error.message);

        } finally {

            setCargando(false);

        }

    };

    // Se ejecuta una sola vez al cargar la pantalla 
    useEffect(() => {

        obtenerClientes();
 
    }, []);

    // Filtrado de clientes según el término de búsqueda
    const clientesFiltrados = clientes.filter((cliente) => {

        const term = busqueda.toLowerCase().trim();

        if (!term) return true;

        const apellido = cliente.name.lastname.toLowerCase();

        const ciudad = cliente.address.city.toLowerCase();

        return apellido.includes(term) || ciudad.includes(term);

    });

    console.log(clientesFiltrados);

    // Muestro un spinner mientras se cargan los clientes desde la API .MB-3
    if (cargando) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" role="status" />
                <p className="mt-3">Cargando clientes...</p>
            </Container>
        );
    }

    // Muestro un mensaje de error si falla el consumo de la API .MB-3
    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">
                    {error}
                </Alert>
            </Container>
        );
    }

    return (
        
    <div className="clientes-page">

        {/* S - Video de fondo */}
        <video
            autoPlay
            muted
            loop
            playsInline
            className="clientes-video"
        >
            <source
                src={videoClientes}
                type="video/mp4"
            />
            Tu navegador no soporta videos.
        </video>

        {/* S - Capa oscura sobre el video */}
        <div className="clientes-overlay"></div>

        {/* S - Contenedor principal */}
        <div className="clientes-content">

            {/* S - Encabezado de la sección de clientes */}
            <div className="clientes-header">

                <h1 className="clientes-title">
                    CLIENTES
                </h1>

                <p className="clientes-description">
                    Administración de Clientes
                </p>

            </div>

            {/* S - Barra de búsqueda reutilizable */}
            <SearchBar
                placeholder="Buscar por apellido o ciudad..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

                    {/* Juan tabla xd*/}
            {/* Muestro la información de cada cliente utilizando Cards de Bootstrap. JuanAr */}
            <Container className="mt-4">

                <Row>

                    {/* Recorro la lista de clientes filtrados para crear una Card por cada uno. JuanAr */}
                    {clientesFiltrados.map((cliente) => (

                        <Col md={6} lg={4} className="mb-4" key={cliente.id}>

                            <Card className="shadow h-100">

                                <Card.Body>

                                    {/* Muestro el identificador del cliente. JuanAr */}
                                    <Card.Title>
                                        Cliente #{cliente.id}
                                    </Card.Title>

                                    {/* Muestro el nombre completo del cliente. JuanAr */}
                                    <Card.Text>
                                        <strong>Nombre:</strong>{" "}
                                        {cliente.name.firstname} {cliente.name.lastname}
                                    </Card.Text>

                                    {/* Muestro el correo electrónico del cliente. JuanAr */}
                                    <Card.Text>
                                        <strong>Email:</strong>{" "}
                                        {cliente.email}
                                    </Card.Text>

                                    {/* Muestro el teléfono del cliente. JuanAr */}
                                    <Card.Text>
                                        <strong>Teléfono:</strong>{" "}
                                        {cliente.phone}
                                    </Card.Text>

                                    {/* Muestro la ciudad del cliente. JuanAr */}
                                    <Card.Text>
                                        <strong>Ciudad:</strong>{" "}
                                        {cliente.address.city}
                                    </Card.Text>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>

        </div>

    </div>

    );

};


export default ListaClientes;
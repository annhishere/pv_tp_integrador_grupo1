import { useEffect, useState } from "react";

// Importo componentes de Bootstrap para mostrar los clientes en tarjetas. JuanAr
import { Card, Row, Col, Container } from "react-bootstrap";

const ListaClientes = () => {

    // Estado donde se guardarán los clientes obtenidos desde la API
    const [clientes, setClientes] = useState([]);

    // Estado del buscador
    const [busqueda, setBusqueda] = useState("");

    // Consumo principal de la API 
    const obtenerClientes = async () => {

        const respuesta = await fetch("https://fakestoreapi.com/users");

        const datos = await respuesta.json();

        setClientes(datos);

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

    return (

        <div>

            <input
                type="text"
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
    );

};


export default ListaClientes;
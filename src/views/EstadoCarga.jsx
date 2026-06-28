import { useEffect, useState } from "react";
import {
  Alert,
  Container,
  Spinner,
  Table,
} from "react-bootstrap";

const EstadoCarga = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        setCargando(true);
        setError(null);

        const respuesta = await fetch("http://localhost:3000/clientes");

        if (!respuesta.ok) {
          throw new Error("Error al obtener los clientes");
        }

        const datos = await respuesta.json();
        setClientes(datos);
      } catch (error) {
        setError("No se pudieron cargar los clientes.");
      } finally {
        setCargando(false);
      }
    };

    obtenerClientes();
  }, []);

  if (cargando) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status" />
        <p className="mt-3">Cargando clientes...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Clientes</h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default EstadoCarga;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAdmin } from "../context/AdminContext";

const Login = () => {
    const {login} = useAdmin();
    const navigate = useNavigate();

    const [nombre, setNombre]=useState("");
    const [sector, setSector]=useState("");
    const [error, setError]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !sector) {
            setError("Completa todos los campos");
            return;
        }
        login(nombre.trim(), sector);
        navigate("/");
    };
    return(
        <Container>
            <Card>
                <Card.Body>
                    <h3>NOCTURNE</h3>
                    <p>Panel de Administracion</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre del Administrador</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa Nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>sector</Form.Label>
                            <Form.Select value={sector} onChange={(e)=>setSector(e.target.value)}>
                                <option value="">Selecciona un sector</option>
                                <option value="Soporte">Soporte</option>
                                <option value="Gerencia">Gerencia</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="dark" type="submit">Ingresar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
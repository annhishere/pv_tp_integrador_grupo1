import { useState } from "react";
import { Navbar, Container, Offcanvas, Button, Nav } from "react-bootstrap";
import { useAdmin } from "../../context/AdminContext";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  // Datos del administrador y función para cerrar sesión
  const { admin, logout } = useAdmin();
  console.log("Admin:", admin);

  return (
    <>
      <Navbar
        fixed="top"
        expand={false}
        className="custom-navbar"
      >
        <Container fluid>

          {/* Logo de la concesionaria */}
          <Navbar.Brand className="brand">
            NOCTURNE
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="menu-lateral"
            className="custom-toggle"
            onClick={() => setShow(true)}
          />
        </Container>
      </Navbar>

      <Offcanvas
        id="menu-lateral"
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="custom-offcanvas"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
        >
          <Offcanvas.Title>
            NOCTURNE
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {admin && (
            <div className="admin-info">
              <h4>{admin.nombre}</h4>
              <p>{admin.sector}</p>
            </div>
          )}

          <hr />

          <div className="menu-links">
            <p>Dashboard</p>
            <Nav.Link
              as={Link}
              to="/clientes"
              onClick={() => setShow(false)}
            >
              Clientes
            </Nav.Link>
          </div>

          <Button
            variant="outline-light"
            className="w-100 mt-4"
            onClick={logout}
          >
            Cerrar Sesión
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
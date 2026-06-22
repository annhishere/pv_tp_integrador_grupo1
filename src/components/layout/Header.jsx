import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";
import { Navbar, Container, Offcanvas, Button } from "react-bootstrap";
//import { AdminContext} from "../../context/AdminContext";

import "../styles/Header.css";

const Header = () => {

  // Controla si el menú lateral está abierto o cerrado
  const [show, setShow] = useState(false);

  // Datos del administrador y función para cerrar sesión
  const { admin, logout } = useAdmin();
  console.log("Admin:", admin);

  return (
    <>
      {/* Barra superior transparente */}
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

          {/* Botón hamburguesa */}
          <Navbar.Toggle
            aria-controls="menu-lateral"
            className="custom-toggle"
            onClick={() => setShow(true)}
          />

        </Container>
      </Navbar>

      {/* Menú lateral */}
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

          {/* Muestra los datos si existe una sesión */}
          {admin && (
            <div className="admin-info">

              <h4>{admin.nombre}</h4>

              <p>{admin.sector}</p>

            </div>
          )}

          <hr />

          {/* Acá pueden agregarse más opciones después */}
          <div className="menu-links">

            <p>Dashboard</p>

            <p>Clientes</p>

          </div>

          {/* Botón para cerrar sesión */}
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
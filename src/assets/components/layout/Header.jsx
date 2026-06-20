
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import "../styles/Header.css";

function Header() {
  // Estado 'show' que controla si el menú lateral (Offcanvas) está abierto o cerrado.
  // Inicialmente empieza en 'false' (oculto).
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Barra de navegación superior. Está fijada arriba (fixed="top") y no se expande automáticamente */}
      <Navbar expand={false} fixed="top" className="custom-navbar">
        <Container fluid>

          {/* Contenedor del nombre de la marca o logo */}
          <Navbar.Brand className="brand">
            NOCTURNE
          </Navbar.Brand>

          {/* Botón tipo "hamburguesa" que abre el menú lateral */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            // Al hacer clic, cambia el estado 'show' a true, desplegando el Offcanvas
            onClick={() => setShow(true)}
            className="custom-toggle"
          />

        </Container>
      </Navbar>

      {/* Componente de menú lateral oculto que aparece desde el lado derecho (placement="end") */}
      <Offcanvas
        show={show} // Se vincula al estado para saber si debe mostrarse o no
        onHide={() => setShow(false)} // Función que se ejecuta para cerrarlo (cambia el estado a false)
        placement="end"
        className="custom-offcanvas"
      >
        {/* Cabecera del menú lateral, incluye el título y el botón "X" para cerrar */}
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            NOCTURNE
          </Offcanvas.Title>
        </Offcanvas.Header>

        {/* Cuerpo del menú lateral donde van las opciones y la información */}
        <Offcanvas.Body>

          {/* Después irá Context */}
          {/* Sección de información del usuario activo (temporalmente escrita directamente en el código) */}
          <div className="admin-info">
            <h5>Ariana</h5>
            <p>Gerencia</p>
          </div>

          {/* Línea separadora horizontal */}
          <hr />

          {/* Contenedor de las opciones de navegación del menú */}
          <div className="menu-items">
            {/* Enlace de navegación hacia el Dashboard */}
            <NavLink
              to="/dashboard"
              className="menu-item"
              // Al hacer clic en el enlace, el menú se cierra automáticamente
              onClick={() => setShow(false)}
            >
              Dashboard
            </NavLink>
          </div>

          {/* Botón de acción final para cerrar sesión */}
          <button className="logout-btn">
            Cerrar sesión
          </button>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
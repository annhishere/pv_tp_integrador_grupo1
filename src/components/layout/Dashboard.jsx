import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCalendarAlt, FaCarSide, FaComments } from "react-icons/fa";

import Header from "./Header";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Header />

      <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="src/assets/video/video.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <p>THE NEW</p>
          <h1>NOCTURNE</h1>
          <Button variant="primary" className="hero-button">
            Descubrir
          </Button>
        </div>
      </section>

      <section className="services-section">
        <Container>
          <div className="section-title">
            <h2>Servicios Premium</h2>
            <p>
              Viví la experiencia Nocturne con atención personalizada.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="service-card">
                <Card.Body>
                  <FaCarSide className="service-icon" />
                  <h4>Catálogo</h4>
                  <p>
                    Descubrí nuestros vehículos premium.
                  </p>
                  <Button variant="outline-light">
                    Explorar
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="service-card">
                <Card.Body>
                  <FaCalendarAlt className="service-icon" />
                  <h4>Test Drive</h4>
                  <p>
                    Reservá una prueba de manejo.
                  </p>
                  <Button variant="outline-light">
                    Reservar
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="service-card">
                <Card.Body>
                  <FaComments className="service-icon" />
                  <h4>Cotización</h4>
                  <p>
                    Solicitá una propuesta personalizada.
                  </p>
                  <Button variant="outline-light">
                    Consultar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
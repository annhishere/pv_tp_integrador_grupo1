// Importa el componente Header que se muestra en la parte superior.
import Header from "./Header";
// Importa estilos específicos del Dashboard.
import "../styles/Dashboard.css";

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
          Tu navegador no soporta video HTML5.
        </video>
        <div className="overlay"></div>

        <div className="hero-content">

          <p>THE NEW</p>

          <h1>NOCTURNE</h1>

        </div>

      </section>
    </>
  );
}

export default Dashboard;
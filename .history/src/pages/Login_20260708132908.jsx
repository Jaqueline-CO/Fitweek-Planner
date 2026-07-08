import { Link } from "react-router-dom";
import "../styles/Home.css";

function Login() {
  return (
    <main className="home-page">
      <section className="home-card">
        <div className="home-logo">
          <span>FW</span>
        </div>

        <span className="home-eyebrow">FitWeek Planner</span>

        <h1>Organiza tu semana de entrenamiento</h1>

        <p>
          Consulta tus rutinas por día, revisa series, repeticiones, RIR y videos
          de ejecución en un solo lugar.
        </p>

        <Link to="/dashboard" className="home-button">
          Comenzar
        </Link>
      </section>
    </main>
  );
}

export default Login;
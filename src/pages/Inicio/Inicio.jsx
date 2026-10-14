import '../../styles/pages.css'

export default function Inicio() {
  return (
    <section className="page">
      <h1>Bienvenidos</h1>
      <p className="page-lead">
        Este es un proyecto de ejemplo hecho con React y Vite. Usá la barra de
        navegación para recorrer las distintas secciones.
      </p>
      <div className="cards">
        <div className="card">
          <h3>Rápido</h3>
          <p>Construido con Vite para un desarrollo ágil.</p>
        </div>
        <div className="card">
          <h3>Simple</h3>
          <p>Componentes chicos y fáciles de entender.</p>
        </div>
        <div className="card">
          <h3>Rosa</h3>
          <p>Porque todo queda mejor en tonos rosados.</p>
        </div>
      </div>
    </section>
  )
}

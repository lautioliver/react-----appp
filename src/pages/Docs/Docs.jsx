import '../../styles/pages.css'

export default function Docs() {
  return (
    <section className="page">
      <h1>Docs</h1>
      <p className="page-lead">Guía rápida para empezar a usar el proyecto.</p>

      <h2>Instalación</h2>
      <p>Cloná el repositorio e instalá las dependencias con <code>npm install</code>.</p>

      <h2 style={{ marginTop: 24 }}>Desarrollo</h2>
      <p>Levantá el servidor local con <code>npm run dev</code>.</p>

      <h2 style={{ marginTop: 24 }}>Build</h2>
      <p>Generá la versión de producción con <code>npm run build</code>.</p>
    </section>
  )
}

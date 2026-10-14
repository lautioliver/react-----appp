import '../../styles/pages.css'

export default function Ingresar() {
  return (
    <section className="page">
      <h1>Ingresar / Registrarte</h1>
      <p className="page-lead">Página estática de ejemplo: los formularios no envían datos.</p>
      <div className="auth-grid">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h2>Ingresar</h2>
          <label>
            Email
            <input type="email" placeholder="tu@email.com" />
          </label>
          <label>
            Contraseña
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn">Ingresar</button>
        </form>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h2>Registrarte</h2>
          <label>
            Nombre
            <input type="text" placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" placeholder="tu@email.com" />
          </label>
          <label>
            Contraseña
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="submit" className="btn">Crear cuenta</button>
        </form>
      </div>
    </section>
  )
}

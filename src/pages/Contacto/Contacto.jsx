import '../../styles/pages.css'

export default function Contacto() {
  return (
    <section className="page">
      <h1>Contacto</h1>
      <p className="page-lead">¿Tenés alguna consulta? Escribinos y te respondemos a la brevedad.</p>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Nombre
          <input type="text" placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input type="email" placeholder="tu@email.com" />
        </label>
        <label>
          Mensaje
          <textarea rows="4" placeholder="Escribí tu mensaje..." />
        </label>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  )
}

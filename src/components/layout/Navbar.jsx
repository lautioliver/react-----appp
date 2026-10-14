import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/blob', label: 'Blob' },
  { to: '/docs', label: 'Docs' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} end>{label}</NavLink>
          </li>
        ))}
      </ul>
      <NavLink to="/ingresar" className="navbar-cta">Ingresar / Registrarte</NavLink>
    </nav>
  )
}

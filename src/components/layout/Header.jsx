import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-brand">
        <span className="header-logo" aria-hidden="true">✿</span>
        <span className="header-title">Blobs Lab</span>
      </Link>
      <p className="header-subtitle">Ejemplos de uso de Blobs en React</p>
      <span className="header-badge">💙💛 Aguante Boca</span>
    </header>
  )
}

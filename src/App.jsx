import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import BlobPage from './pages/Blob/Blob.jsx'
import Docs from './pages/Docs/Docs.jsx'
import Ingresar from './pages/Ingresar/Ingresar.jsx'
import './styles/App.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blob" element={<BlobPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App

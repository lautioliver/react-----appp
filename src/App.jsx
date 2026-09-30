import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './Blobs.css'

const iconsHref = `${import.meta.env.BASE_URL}icons.svg`

function App() {
  const [count, setCount] = useState(0)
  const [blob, setBlob] = useState(null)
  const [mensaje, setMensaje] = useState('')

  // 1) Crear un Blob de tipo texto (.txt)
  const crearBlob = () => {
    const texto = 'Hola! Este es un archivo de texto creado con un Blob desde React.'
    const nuevoBlob = new Blob([texto], { type: 'text/plain' })
    setBlob(nuevoBlob)
    setMensaje(`Blob creado. Tamaño: ${nuevoBlob.size} bytes. Tipo: ${nuevoBlob.type}`)
  }

  // 2) Descargar el Blob como archivo .txt en la PC
  const descargarBlob = () => {
    if (!blob) {
      setMensaje('Primero debe crear el Blob.')
      return
    }
    const url = URL.createObjectURL(blob)
    const enlace = document.createElement('a')
    enlace.href = url
    enlace.download = 'archivo.txt'
    document.body.appendChild(enlace)
    enlace.click()
    document.body.removeChild(enlace)
    URL.revokeObjectURL(url)
    setMensaje('Archivo "archivo.txt" descargado.')
  }

  // 3) Usar slice() para obtener una parte del Blob
  const usarSlice = async () => {
    if (!blob) {
      setMensaje('Primero debe crear el Blob.')
      return
    }
    const parte = blob.slice(0, 20, 'text/plain')
    const contenido = await parte.text()
    setMensaje(`slice(0, 20) → "${contenido}" (${parte.size} bytes)`)
  }

  return (
    <>
      <h1>Hello World</h1>

      <div className="blobs">
        <h2>Ejemplo de uso de Blobs</h2>
        <div className="blobs-botones">
          <button onClick={crearBlob}>Crear Blob de texto</button>
          <button onClick={descargarBlob}>Descargar Blob</button>
          <button onClick={usarSlice}>Usar slice()</button>
        </div>
        {mensaje && <p className="blobs-mensaje">{mensaje}</p>}
      </div>
    </>
  )
}

export default App

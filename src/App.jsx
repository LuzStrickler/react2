import { useState } from 'react'
import imagen from './assets/onedir.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h2>mi banda favorita es:</h2>
      <img src={imagen} alt="Descripción de la imagen" />
    </div>
    </>
  )
}

export default App

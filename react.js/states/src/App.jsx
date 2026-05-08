import { useState } from 'react'
import './App.css'

function App() {

  const [titulo, setTitulo] = useState("Google")

  function mudarTexto(){

    setTitulo = "Microsoft"
  }
  return (
    <>
   <h1>Minha pagina de {titulo} </h1>

   <button onClick={mudarTexto}>Mudar Texto</button>
    </>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import Formulariostate from './components/formulariostate/formulariostate'
import Cadfruta from './components/cadfruta/cadfruta'


function App() {
  //Variável privada (objeto) só pode ser mudada pela função setTitulo
  const [titulo, setTitulo] = useState("Google")

function mudarTexto(){
    setTitulo ("Microsoft")
  }
function mudarTexto2(){
    setTitulo ("Nintendo")
  }


  return (
    <>
    {/* <h1>Minha Pagina de {titulo}</h1>
    <button onClick={mudarTexto}>Mudar Texto</button>
    <br />
    <button onClick={mudarTexto2}>Nintendo</button>
    
    <Contador/>
<br />
    <Formulariostate/> */}

   <Cadfruta/>
    </>
  );
}

export default App
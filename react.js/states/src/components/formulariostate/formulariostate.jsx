import { useState } from "react"

function Formulariostate() {
    const [nome, setNome] = useState("sem texto")
    return(

        <div>
            <h2>Formulario com State</h2>
           <label htmlFor="nome">Nome</label>
         <input type="text" 
         placeholder="Digite seu nome"
          onChange={(evento) => {
            // evento - evento capturado, no caso o change
            // target - elemento que disparou o evento, no caso o input
            setNome(evento.target.value)
         }} />

         <br />
         <label htmlFor="">Texto Digitado: <strong>{nome}</strong></label>
        </div>

    )
}

export default Formulariostate
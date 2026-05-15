import { useState } from "react"
import "./cadfruta.css"

function Cadfruta() {
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const [arrFrutas, setArrFrutas] = useState([

        {id: 1, nome: "Amora", quantidade: 10},
        {id: 2, nome: "Abacaxi", quantidade: 15}
    ])

    function Cadastrar(e) {

        e.preventDefault()
        setArrFrutas([...arrFrutas,{id: Date.now(), nome: fruta, quantidade: quantidade}])
    }
    
    return(

        <section className="sessao-cadastro">
         <h2>Cadastro</h2>
         <form action="" onSubmit={Cadastrar}>

         <fieldset className="cadastro">
<label htmlFor="fruta" className="cadastro-rotulo">Cadastre uma fruta</label>

         </fieldset>
<input type="text"  id="fruta" placeholder="ex: limão" value={fruta} className="cadastro-entrada" onChange={(e) => {setFruta(e.target.value)}}/>
<button type="submit"  className="cadastro-btcadastrar" onClick={Cadastrar}>Cadastrar</button>
<br />
<input type="number"  id="quantidade" value={quantidade}  placeholder="ex: 10" className="cadastro-entrada" onChange={(e) => {setQuantidade(e.target.value)}}/>
<button type="submit"  className="cadastro-btcadastrar" onClick={Cadastrar}>Cadastrar</button>
    </form>

<div className="resultados">

<ul>
    {
        
        arrFrutas.map((f) => { return <li key={f.id}>Fruta: <strong>{f.nome}</strong> Quantidade: <strong>{f.quantidade}</strong></li>})
        
    }

</ul>
</div>
        </section>

    )
}

export default Cadfruta
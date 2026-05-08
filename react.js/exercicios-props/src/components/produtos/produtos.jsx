import Produto from '../exercicio02/produto';
import "./produtos.css"
function Produtos (){

    const produtos = [

{
    nome: "Lightstick Monsta X",
    preco: 230,
    desc: "bastao de luz do grupo de kpop Monsta X"
},

{
    nome: "Nintendo Switch 2",
    preco: 4.500,
    desc: "video game portatil nintendo"
},

{
    nome: "Photocard Ateez",
    preco: 230,
    desc: "fotos oficiais do grupo de kpop Ateez"
}

    ]

return(
produtos.map((produtinho) => {

    return( <Produto
    nome={produtinho.nome}
    preco={produtinho.preco}
    desc={produtinho.desc}
    />)
})

)

}

export default Produtos

// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao


import "./produto.css"

function Produto( {produto, preco, descricao} ){

    return(

        <div>
        <p>produto: {produto} </p>
        <p>preço: {preco}</p>
        <p>desc: {descricao}</p>
        </div>
        
    )

}

export default Produto
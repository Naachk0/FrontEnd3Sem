// 09 ) Crie um componente chamado Jogo que receba:
// nome, plataforma, preco, imagem
// Exiba todas as informações em formato de card.
import myimages  from "../../assets/pokopia.webp"
import "./jogo.css"

function Jogo ( {nome, plataforma, preco, imagem} ){

    return (
<div className="card-jogo">
       <img className="card-perfil__image" src={myimages} alt="imagem do jogo"/>
       <p>Jogo: {nome}</p>
       <p>Preço: {preco}</p>
       <p>Plataforma: {plataforma}</p>
       
</div>
        
    )

}

export default Jogo
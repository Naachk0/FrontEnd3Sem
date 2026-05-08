// 06) Crie um componente chamado Aluno que receba:
// nome
// curso
// imagem
// Exiba: A imagem do aluno O nome
// O curso

import myimages  from "../../assets/hwaid.jpg"
import "./aluno.css"

function Aluno ( {nome, curso} ){

    return (
<div>
       <p>Nome do aluno: {nome}</p>
      <img className="card-perfil__image" src={myimages} alt="imagem do usuario"/>
       <p>Curso: {curso}</p>
</div>
        
    )

}

export default Aluno
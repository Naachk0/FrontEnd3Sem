// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./perfil.css"

function Perfil ( {nome, idade, profissao} ) {

    return(

        <div className="card-perfil">
    <p>Nome: {nome}</p>
    <p>Idade: {idade}</p>
    <p>Profissao: {profissao}</p>
        </div>
    

    )

}

export default Perfil
import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovousuario] = useState("");

    const login = () => {
        setUsuario(novoUsuario);
        localStorage.setItem("usuario", JSON.stringify(novoUsuario) );
        setNovousuario("");

    };



    return (

        <>
            <h2>Pagina Perfil</h2>
            <span>Usuario: {usuario}</span>
            <p>
                <input type="text" placeholder="novo usuario" value={novoUsuario} onChange={(e) => { setNovousuario(e.target.value) }} />
                <button onClick={() => { login() }}>Entrar</button>
            </p>
        </>

    )
}


export default Perfil
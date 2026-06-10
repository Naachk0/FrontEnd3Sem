import { Link } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Header = () => {
  const {usuario, setUsuario} = useContext(UsuarioContext)

const logout = () => {

    setUsuario(null)
    localStorage.removeItem("usuario")
}


    return(
<header>
    <nav>
        <Link to={"/"}>Home</Link>{""}
        <Link to={"/perfil"}>Perfil</Link>{""}
        <Link to={"/mypage"}>Meu Blog</Link>{""}
        <Link to={"/cadastroproduto"}>Produto</Link>{""}
        <span>({usuario})</span>
    </nav><button onClick={() => {setUsuario(null)} }>Sair</button>



</header>

    )


}

export default Header
import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    // recupera os dados do usuario
const {usuario} = useContext(UsuarioContext)
//  se o usuario estiver logado ele pode acessar
// senao redireciona para a home "/"
return usuario ? children : <Navigate to="/" />

}
export default PrivateRoute
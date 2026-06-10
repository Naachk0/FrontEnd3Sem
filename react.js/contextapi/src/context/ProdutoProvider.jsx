import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

const ProdutoProvider = ({children}) => {
    const [produto, setProduto] = useState("Garrafa")

    return (
        <ProdutoContext.Provider value={{
            produto, setProduto

        }}>{children}</ProdutoContext.Provider>

    )

}

export default ProdutoProvider
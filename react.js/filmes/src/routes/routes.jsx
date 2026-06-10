import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroFilme from "../pages/cadastroFIlmes/CadastroFilmes";
import CadastroGeneros from "../pages/cadastroGenero/CadastroGenero";

const Rotas = () => {

    return (


        
        <BrowserRouter>
        <Routes>

        <Route  path="/" element={<Login/>}/>
        <Route  path="/filmes" element={<CadastroFilme/>}/>
        <Route  path="/generos" element={<CadastroGeneros/>}/>

        </Routes>
        </BrowserRouter>
    );

};

export default Rotas;
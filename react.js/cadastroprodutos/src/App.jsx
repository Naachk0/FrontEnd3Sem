import './App.css'
import CadastroProduto from './pages/cadastroproduto/cadastroprodutopage'
import HomePage from './pages/home/homepage'
import Quemsomos from './pages/quemsomos/quemsomospage'
import CadastroFrutas from './pages/cadastrofruta/cadastrofrutaspage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/header/header'

export default function App() {

return(

  <BrowserRouter>
 <Header/>
    <Routes>

<Route element={<HomePage/>} path='/'/>
<Route element={<Quemsomos/>} path='/quemsomos'/>
<Route element={<CadastroProduto/>} path='/produtos'/>
<Route element={<CadastroFrutas/>} path='/frutas'/>
    </Routes>

 
  </BrowserRouter>
 

)

}
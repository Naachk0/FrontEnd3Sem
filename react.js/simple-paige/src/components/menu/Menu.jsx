import Cardperfil from "../cardperfil/cardperfil";
import "./Menu.css"



function Menu(){
return (
  
        // <!-- bloco -->
        <nav className="menu">
            {/* <!-- elemento --> */}
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item   menu__item--signin">Entrar</a>
            <a href="#" className="menu__item  menu__item--signup ">Cadastrar</a>

            <Cardperfil/>
        </nav>
    


);
}
export default Menu;
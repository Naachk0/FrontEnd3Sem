import "./header.css"
import { Link } from "react-router-dom"

export default function Header(){

return (

    <nav className="navbar">

<Link to="/">Home</Link>
<Link to="/quemsomos">Quem somos</Link>
<Link to="/frutas"></Link>
<Link to="/produtos"></Link>


    </nav>

)

}

import { NavLink,Link } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
   
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active" title="Inicio">Inicio</NavLink>
            <NavLink to="/servicios" activeClassName="active" title="Nuestros Servicios">Servicios</NavLink>
            <NavLink to="/circulares" activeClassName="active" title="Circulares">Circulares</NavLink>
            <Link to="/contacto" title="Contáctanos">
                <Button text="Contáctanos" title="Ir a la página de contacto" ariaLabel="Ir a la página de contacto"/>
            </Link>
        </nav>
      
    )
}

import { NavLink,Link } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
   
    return (
        <nav>
            <NavLink to="/" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Inicio</NavLink>
            <NavLink to="/servicios" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Servicios</NavLink>
            <NavLink to="/circulares" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Circulares</NavLink>
            <Link to="/contacto">
                <Button text="Contáctanos"/>
            </Link>
        </nav>
    )
}

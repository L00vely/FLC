import { NavLink } from "react-router-dom";
import { Button } from "./Button";

export const Navbar = () => {
   
    return (
        <nav>
            <NavLink to="/" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Inicio</NavLink>
            <NavLink to="/services" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Servicios</NavLink>
            <NavLink to="/circulares" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Circulares</NavLink>
            <Button text="Contáctanos"/>
        </nav>
    )
}

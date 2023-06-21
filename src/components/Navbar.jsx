import { NavLink } from "react-router-dom";

export const Navbar = () => {
   
    return (
        <nav>
            <NavLink exact to="/" className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}>Inicio</NavLink>
            <NavLink to="/services" activeClassName="active-link">Servicios</NavLink>
            <NavLink to="/circulares" activeClassName="active-link">Circulares</NavLink>
        </nav>
    )
}

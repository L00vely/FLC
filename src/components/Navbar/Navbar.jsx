import { NavLink } from "react-router-dom";

export const Navbar = () => {
   
    return (
        <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/">Servicios</NavLink>
            <NavLink to="/">Circulares</NavLink>
        </nav>
    )
}

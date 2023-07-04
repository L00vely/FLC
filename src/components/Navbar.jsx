import { NavLink,Link } from "react-router-dom";
import { Button } from "./Button";
import { useState, useEffect } from "react";

export const Navbar = () => {
  
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        
            window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav className={`${isSticky ? 'sticky' : ''}`}>
            <NavLink to="/" title="Inicio" >Inicio</NavLink> 
            <NavLink to="/servicios" title="Nuestros Servicios">Servicios</NavLink>
            {/* <NavLink to="/circulares" title="Ir a la página de circulares">Circulares</NavLink> */}
            <NavLink to="/contacto" title="Ir a la página de contacto">Contáctanos</NavLink>
       
        </nav>
    
    )
}

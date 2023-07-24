import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';
import { MovilButton } from '../MovilButton/MovilButton';
import './header.scss'

export const Header =  () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
    return(
      <header>
        <Link to="/" title="Fiscal Legum Corporatum">
          <img className="header-logo" src="/logos/logo_letras.png" alt="Logo de Fiscal Legum Corporatum" />
        </Link>
        { isMobile ?  (<MovilButton />) : (<Navbar />)}
        
      </header>
    );
}
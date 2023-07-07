import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";

import { Navbar } from "./Navbar";
import { MovilButton } from './MovilButton';

export const Header =  () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
    return(
      <header>
        <Link to="/" title="Fiscal Legum Corporatum">
          <img className="header-logo" src="/logos/logo_letras.png" alt="Logo de Fiscal Legum Corporatum" />
        </Link>
        { isMobile ?  (<MovilButton />) : (<Navbar />)}
        
      </header>
    );
}
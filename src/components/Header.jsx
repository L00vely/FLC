import { Link } from "react-router-dom";
// import logo from '../assets/logos/logo_letras.png';

import { Navbar } from "./Navbar";

export const Header =  () => {
    return(
      <header>
        <Link to="/" title="Fiscal Legum Corporatum">
          <img className="header-logo" src="/logos/logo_letras.png" alt="Logo de Fiscal Legum Corporatum" />
        </Link>
        <Navbar />
      </header>
    );
}
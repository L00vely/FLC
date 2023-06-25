import { Link } from "react-router-dom";
// import logo from '../assets/logos/logo_letras.png';

import { Navbar } from "./Navbar";

export const Header =  () => {
    return(
        <header>
          <Link to="/">
            <img className="header-logo" src={'/logos/logo_letras.png'} alt="Fiscal Legum Corporatum Logo"/>
          </Link>
          <Navbar />
        </header>
    );
}
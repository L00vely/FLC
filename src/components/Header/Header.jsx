import { Link } from "react-router-dom";
import logo from '../../logos/logo_letras.png';
import { Navbar } from "../Navbar/Navbar";

export const Header =  () => {
    return(
        <header>
          <Link >
            <img className="header-logo" src={logo} alt="Fiscal Legum Corporatum Logo"/>
          </Link>
          <Navbar />
        </header>
    );
}
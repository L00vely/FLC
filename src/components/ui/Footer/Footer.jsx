import { Link } from "react-router-dom";

import './footer.scss'

export const Footer = () => {
    return (
      <footer>
        <div className="footer-top-container">
          <Link to="/">
            <img className="footer-logo" src="/logos/logo_letras.png" alt="Fiscal Legum Corporatum Logo" />
          </Link>
      
          <div className="footer-info-container">
  
            <a href="https://goo.gl/maps/XZurWR7Yz2sjzdGa8" className="footer-item-container" target="_blank">
              <div className="icon-container">
                <img src="/icons/icono-mapa.png" alt="Icono de Google Maps" />
              </div>
              <p>Av. Coyoacán 1622, Colonia del Valle, CDMX</p>
            </a>
      
            <a href="tel:+525536839225" className="footer-item-container">
              <div className="icon-container">
                <img src="/icons/icono-telefono.png" alt="Icono de teléfono" />
              </div>
              <p>+52 55 36 83 92 25</p>
            </a>
      
            <a href="https://wa.me/525514178078" className="footer-item-container" target="_blank">
              <div className="icon-container">
                <img src="/icons/icono-whatsapp.png" alt="Icono de Whatsapp" />
              </div>
              <p>+52 55 14 17 80 78</p>
            </a>
      
            <a href="mailto:fiscallegumcorporatum@gmail.com" className="footer-item-container">
              <div className="icon-container">
                <img src="/icons/icono-email.png" alt="Icono de Gmail" />
              </div>
              <p>fiscallegumcorporatum@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="footer-bottom-container">
          <span>2023 FISCAL, LEGUM, CORPORATUM, Todos los derechos reservados ©</span>
        </div>
      </footer>      
    )
}

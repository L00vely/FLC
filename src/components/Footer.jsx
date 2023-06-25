import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-top-container">
                <Link to="/">
                    <img className="header-logo" src={'/logos/logo_letras.png'} alt="Fiscal Legum Corporatum Logo"/>
                </Link>

                <div className="footer-info-container">
                    <h3>Contacto</h3>
                    
                    <div className="footer-item-container">
                        <div className='icon-container'>
                            <img src='/icons/icons8-marcador-de-mapa-50.png' alt="Icono de Google Maps"/>
                        </div>
                        <p>Av. Coyoacán 1622, Colonia del Valle, CDMX</p>
                    </div>

                    <div className="footer-item-container">
                        <div className='icon-container'>
                            <img src='/icons/icons8-teléfono-50.png' alt="Icono de teléfono"/>
                        </div>
                        <p>+52 55 36 83 92 25</p>
                    </div>

                    <div className="footer-item-container">
                        <div className='icon-container'>
                            <img src='/icons/icons8-whatsapp-50.png' alt="Icono de Whatsapp"/>
                        </div>
                        <p>+52 55 14 17 80 78</p>
                    </div>

                    <div className="footer-item-container">
                        <div className='icon-container'>
                            <img src='/icons/icons8-gmail-50.png' alt="Icono de Gmail"/>
                        </div>
                        <p>fiscallegumcorporatum@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
                <p>2023 FISCAL, LEGUM, CORPORATUM, Todos los derechos reservados ©</p>
            </div>
            

        </div>
    )
}

import { Link } from "react-router-dom"
import './contactNav.scss'

export const ContactNav = () => {
    return (
        <div className="contact-buttons-container">
            <Link to="https://wa.me/525514178078" title="Contacto por WhatsApp" className="contact-nav-link-container">
                <div className="icon-container">
                    <img src="/icons/icono-whatsapp.png" alt="Icono de Whatsapp" />
                </div>
                <span>WhatsApp</span>
            </Link>

            <Link to="https://www.linkedin.com/" title="Perfil de LinkedIn" className="contact-nav-link-container">
                <div className="icon-container">
                    <img src="/icons/icono-linkedin.png" alt="Icono de LinkedIn" />
                </div>
                <span>LinkedIn</span>
            </Link>

            <Link to="https://www.messenger.com/" title="Contacto por Messenger" className="contact-nav-link-container">
                <div className="icon-container">
                    <img src="/icons/icono-messenger.png" alt="Icono de Messenger" />
                </div>
                <span>Messenger</span>
            </Link>

            <Link to="mailto:fiscallegumcorporatum@gmail.com" title="Contacto por Email" className="contact-nav-link-container">
                <div className="icon-container">
                    <img src="/icons/icono-gmail.png" alt="Icono de Gmail" />
                </div>
                <span>Email</span>
            </Link>
        </div>

    )
}

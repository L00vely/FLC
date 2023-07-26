import { Link } from "react-router-dom"
import './contactItem.scss'

export const ContactItem = ({ link, name }) => {
    return (
        <Link to={link} title={`Contacto por ${ name }`} className="contact-nav-link-container">
            <div className="icon-container">
                <img src={`/icons/icono-${name}.png`} alt={`Icono de ${name}`}/>
            </div>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
        </Link>
    )
}

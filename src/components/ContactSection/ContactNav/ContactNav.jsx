import { Link } from "react-router-dom"
import './contactNav.scss'
import { ContactItem } from "../ContactItem/ContactItem"

export const ContactNav = () => {
    return (
        <div className="contact-buttons-container">
            <ContactItem 
                link={"https://wa.me/525514178078"}
                name={"whatsapp"}
            />

            <ContactItem 
                link={"/"}
                name={"linkedin"}
            />

            <ContactItem 
                link={"/"}
                name={"facebook"}
            />
            

            <ContactItem 
                link={"/"}
                name={"tiktok"}
            />
           
           <ContactItem 
                link={"mailto:fiscallegumcorporatum@gmail.com"}
                name={"email"}
            />


            <Link to="mailto:fiscallegumcorporatum@gmail.com" title="Contacto por Email" className="contact-nav-link-container">
                <div className="icon-container">
                    <img src="/icons/icono-gmail.png" alt="Icono de Gmail" />
                </div>
                <span>Email</span>
            </Link>
        </div>

    )
}

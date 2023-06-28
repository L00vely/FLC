import { Link } from "react-router-dom"

export const ContactNav = () => {
    return (
        <div className="contact-buttons-container">
            <Link to="https://wa.me/525514178078">  
                <div className='icon-container'>
                    <img src={'/icons/icons8-whatsapp-50.png'} alt="Icono de Whatsapp" />
                </div>
            </Link>
            
            <Link to="https://www.linkedin.com/">
                <div className='icon-container'>
                    <img src={'/icons/icons8-linkedin-50.png'} alt="Icono de LinkedIn" />
                </div>
            </Link>
            
            <Link to="https://www.messenger.com/">
                <div className='icon-container'>
                    <img src={'/icons/icons8-facebook-messenger-50.png'} alt="Icono de Messenger" />
                </div>
            </Link>
        
            <Link to="mailto:fiscallegumcorporatum@gmail.com">
                <div className='icon-container'>
                    <img src={'/icons/icons8-gmail-50.png'} alt="Icono de Gmail" />
                </div>
            </Link>
            
        </div>
    )
}

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
                link={"https://www.linkedin.com/company/fiscallegumcorporatum/"}
                name={"linkedin"}
            />

            <ContactItem 
                link={"https://www.facebook.com/Cga132526"}
                name={"facebook"}
            />
            

            {/* <ContactItem 
                link={"/"}
                name={"tiktok"}
            /> */}
           
           <ContactItem 
                link={"mailto:fiscallegumcorporatum@gmail.com"}
                name={"email"}
            />

        </div>
    )
}

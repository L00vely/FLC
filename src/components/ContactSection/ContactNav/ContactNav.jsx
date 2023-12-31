import { Link } from "react-router-dom"
import { Button, ButtonGroup } from '@chakra-ui/react'
import './contactNav.scss'
import { ContactItem } from "../ContactItem/ContactItem"

export const ContactNav = () => {
    return (
        <ButtonGroup
            gap="2rem"
            
            display="grid"
            gridTemplateColumns={["repeat(4,1fr)", "repeat(2,1fr)", "repeat(4,1fr)", "repeat(4,1fr)"]}

        >
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

        </ButtonGroup>
    )
}

import { Button, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import './contactItem.scss'

export const ContactItem = ({ link, name }) => {
    return (
        <Button 
            as={Link} 
            to={link} 
            title={`Contacto por ${ name }`} 
            bg="white.100"

        >
       
            <Image 
                w="2rem" 
                src={`/icons/icono-${name}.png`} 
                alt={`Icono de ${name}`}
                mr=".5rem"    
            />
          
            <Text as="span">{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
        </Button>
    )
}

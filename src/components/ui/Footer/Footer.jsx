// import { Link } from "react-router-dom";
import { GridItem, Box, Link, HStack, VStack, Image, Text, Divider } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import './footer.scss'

const FooterItem = ({ href, target, iconSrc, alt, text }) => ( 
  <Link href={href} className="footer-item-container" target={target} rel="noopener noreferrer" isExternal>
    
    <Image  
      src={iconSrc} 
      alt={alt}
    />
   
    <Text as='p'>{text}</Text>
  </Link>
);



export const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  const items = [
    {
      href: "https://goo.gl/maps/XZurWR7Yz2sjzdGa8",
      target: "_blank",
      iconSrc: "/icons/icono-mapa.png",
      alt: "Icono de Google Maps",
      text: "Av. Coyoacán 1622, Colonia del Valle, CDMX"
    },
    {
      href: "tel:+525536839225",
      iconSrc: "/icons/icono-telefono.png",
      alt: "Icono de teléfono",
      text: "+52 55 36 83 92 25"
    },
    {
      href: "https://wa.me/525514178078",
      target: "_blank",
      iconSrc: "/icons/icono-whatsapp.png",
      alt: "Icono de Whatsapp",
      text: "+52 55 14 17 80 78"
    },
    {
      href: "mailto:fiscallegumcorporatum@gmail.com",
      iconSrc: "/icons/icono-email.png",
      alt: "Icono de Gmail",
      text: "fiscallegumcorporatum@gmail.com"
    }
  ];


    return (
      <GridItem
        width="100vw"
        as="footer" 
        bg="white.100" 
        area={'footer'} 
        p={"2rem"}
        flexDir="column"
        display="flex"         
        justifyContent="space-between"
        alignItems="center"
      >
        
        <HStack
          display="flex"
          w="100%"
          justifyContent={ isMobile ? "center" : "space-between" }
          alignItems="center"
          
        >

          <Box 
            as={Link} 
            to="/" 
            title="Fiscal Legum Corporatum"
          > 
            <Image  
              alt="Logo de Fiscal Legum Corporatum" 
              src="/logos/logo_letras.png" 
              w="30rem"
              
            />
          </Box>

          
            <VStack
              display={ isMobile ? "none" : "flex" }
            >
              {items.map((item, index) => (
                <FooterItem key={index} {...item} />
              ))}
              
            </VStack>
        </HStack>
  
        <Divider orientation='horizontal' style={ { borderWidth: "2px", borderColor: "#A80000"}}/>
     
        <Text as="p">Todos los derechos reservados ©</Text>
        
      </GridItem>      
    )
}

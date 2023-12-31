// import { Link } from "react-router-dom";
import { GridItem, Box, Link, HStack, VStack, Image, Text, Divider } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';

const FooterItem = ({ href, target, iconSrc, alt, text }) => ( 
  <HStack 
    gap="1rem"
    as="a"
    href={href}
    target={target}
    w="100%"
      
  >
    
    <Image  
      src={iconSrc} 
      alt={alt}
      width="2rem"
    />
   
    <Text as='p'>{text}</Text>
  </HStack>
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
        gap="2rem"
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

          <HStack spacing="2rem" display={ isMobile ? "none" : "flex" } >
            
            <VStack>
              {items.map((item, index) => (
                <FooterItem key={index} {...item} />
              ))}
              
            </VStack>
            <Box w="50%" >
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1882.0441701856262!2d-99.17204492520065!3d19.365327198989217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffce5edc247d%3A0x9e6858280a0d9dd!2sCrea%20Working%20Spaces!5e0!3m2!1ses!2smx!4v1687631277758!5m2!1ses!2smx" 
                  loading="lazy" 

                  width="100%"
              />
            </Box>
          </HStack>
        </HStack>
  
        <Divider width="100vw" orientation='horizontal' style={ { borderWidth: "2px", borderColor: "#A80000"}}/>
     
        <Text as="p">Todos los derechos reservados ©</Text>
        
      </GridItem>      
    )
}

import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';
import { MovilButton } from '../MovilButton/MovilButton';
import { Box, GridItem, Image } from '@chakra-ui/react';

export const Header =  () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });


  return(
    <GridItem
      area='header' 
      as='header'
      bg="white.100"
      p="2rem"
      h="auto"
      width="100vw"  
      top="0"
      zIndex="1"
      display="flex"
      justifyContent="space-between"
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
          w={ isMobile ? "20rem" : "30rem"}
          
        />
      </Box>

      { isMobile ?  (<MovilButton />) : (<Navbar />)}
      
    </GridItem>
  );
}
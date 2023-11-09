import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import { Navbar } from '../Navbar/Navbar';
import { MovilButton } from '../MovilButton/MovilButton';
import { Box, HStack, Image } from '@chakra-ui/react';

export const Header =  () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });


  return(
    <HStack 
      as='header'
      bg="white.100"
      p="2rem"
      h="auto"
      w="100%"
      top="0"
      zIndex="1"
      display="flex"
      align="center"
      justify="space-between"
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
      
    </HStack>
  );
}
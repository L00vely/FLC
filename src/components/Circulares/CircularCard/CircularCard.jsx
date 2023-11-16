import { useState } from 'react'; 
import PropTypes from 'prop-types';
import { Card, Box, Image, Link, Text, HStack, VStack } from '@chakra-ui/react';

export const CircularCard = ( { pdf, img, date, title, link }) => {
  const [mouseEncima, setMouseEncima] = useState(false);


  const cambiarAColorRojo = () => {
    setMouseEncima(true);
  };

  const cambiarAColorBlanco = () => {
    setMouseEncima(false);
  };

  const handleImageClick = () => {
    window.open(pdf, '_blank');
  };

  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    bg: 'white.100',
    gap: '1.5rem',
    transition: '.4s', 
    width: "100%",
    heigh: "100%",
    _hover: {
      transform: 'scale(1.05)',

        bg: 'red.100',
        color: 'white.100',
        boxShadow: '0 0 1rem #A80000',
        textDecoration: 'none',
    },
};


  return (
      <Card 
        className='animate__animated animate__fadeIn'
        as={Link} 
    
        { ...cardStyles }
        onMouseEnter={cambiarAColorRojo} 
        onMouseLeave={cambiarAColorBlanco}
      
      > 
       
      <HStack>
        <Box height="100%">
            <Image  
                src={ img }
                alt={`Miniatura del ${ title }`} 
                onClick={handleImageClick}        
                w="20rem"
                height="100%"
            />
        </Box>

    

    
        <VStack
          align= {["center"]}
          justify= {["center", "flex-start"]}
          p="1rem"
        >
          <VStack
            align="flex-start"
            justify="flex-start"
            w="100%"
          >
            <Text as="strong">{ title }</Text>
            <Text as="span">{ date }</Text>
          </VStack>
{/* 
          <Link as="a"  
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Box>
              <Image
                src={!mouseEncima ? '/icons/linkedin-rojo.png' : "/icons/linkedin-blanco.png" }
                alt="LinkedIn icon"
              />
            </Box>
           
          </Link> */}
        </VStack>

            
            

      </HStack>
      
          
    

        
    </Card>
  )
}

CircularCard.propTypes = {
    pdf: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


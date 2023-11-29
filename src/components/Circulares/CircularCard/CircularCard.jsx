import PropTypes from 'prop-types';
import { Card, Box, Image, Link, Text, HStack, VStack, Divider, Flex, Tooltip } from '@chakra-ui/react';
import { CalendarIcon, DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';

export const CircularCard = ( { pdf, thumbnail, date, title, description }) => {

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
    bg: 'white.100',
    transition: '.4s', 
    _hover: {
      boxShadow: '0 0 1rem #A80000',
      textDecoration: 'none',
    },
};

  let formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear();
  formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return (
      <Card 
        className='animate__animated animate__fadeIn'
        as={Link} 
        alignSelf="flex-start"
        { ...cardStyles }
        onMouseEnter={cambiarAColorRojo} 
        onMouseLeave={cambiarAColorBlanco}
      
      > 
        <VStack >   
          <Text as="h3" color="white.100" bg="red.100" w="100%" textAlign="center">{ title }</Text>
          <Text as="p"  p="1rem" textAlign="center">{ description }</Text>
            {/* <Box height="100%">
                <Image  
                    src={ thumbnail.url }
                    alt={`Miniatura del ${ thumbnail.title }`} 
                    onClick={handleImageClick}        
                    w="100%"
                    height="100%"
                />
            </Box> */}
         
          <Divider borderWidth=".1rem"/>

          <Flex w="100%" direction="row" justify="space-between" align="center">
            <Text 
              as="span" 
              fontWeight="500" 
              color="gray.100"
              p=".5rem"
              
            >
              <CalendarIcon mr=".5rem"/> { formattedDate }
            </Text>

            <HStack>
              <Tooltip label="Abrir en otra pestaña" aria-label="Abrir en otra pestaña">
                <ExternalLinkIcon mr=".5rem"/>              
              </Tooltip>
              

              <Tooltip label="Descargar" aria-label="Descargar">
                <DownloadIcon mr=".5rem"/>  
              </Tooltip>
              
            </HStack>
          </Flex>
              
      </VStack> 
    </Card>
  )
}

CircularCard.propTypes = {
    pdf: PropTypes.object.isRequired,
    thumbnail: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}


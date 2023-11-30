import PropTypes from 'prop-types';
import { Card, Box, Image, Link, Text, HStack, VStack, Divider, Flex, Tooltip } from '@chakra-ui/react';
import { CalendarIcon, DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';

export const CircularCard = ( { pdf, thumbnail, date, title, description, slug }) => {

  const openExternalLink = () => {
    window.open(pdf.url, '_blank');
  };

  
  const downloadPDF = async () => {
    const urlDelPDF = pdf.url;

    try {
      const respuesta = await fetch(urlDelPDF);
      const datosPDF = await respuesta.blob();

      // Crea un objeto Blob y crea una URL para el archivo
      const blob = new Blob([datosPDF], { type: 'application/pdf' });
      const urlBlob = URL.createObjectURL(blob);

      // Crea un elemento 'a' dinámicamente y simula un clic para descargar el PDF
      const link = document.createElement('a');
      link.href = urlBlob;
      link.download = pdf.title;
      link.click();

      // Limpia la URL del Blob después de la descarga
      URL.revokeObjectURL(urlBlob);
    } catch (error) {
      console.error('Error al descargar el PDF', error);
    }
  };

  const cardStyles = {
    bg: 'white.100',
  };

  let formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear();
  formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return (
      <Card 
        className='animate__animated animate__fadeIn'
        alignSelf="flex-start"
        { ...cardStyles }  
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

          <Flex gap="1rem" w="100%" p="1rem" direction={["column", "column", "row", "row"]} justify="space-between" align="center">
            <HStack >
              <CalendarIcon/>
              <Text 
                as="span" 
                fontWeight="500" 
                color="gray.100"                
              >
                 { formattedDate }
              </Text>
            </HStack>
            
            <Divider borderWidth=".1rem" display={["block", "none"]}/>


            <HStack  >
              <Tooltip label="Abrir en otra pestaña" aria-label="Abrir en otra pestaña">
                <ExternalLinkIcon mr=".5rem" onClick={openExternalLink} cursor="pointer"/>              
              </Tooltip>
              

              <Tooltip label="Descargar" aria-label="Descargar" >
                <DownloadIcon mr=".5rem" onClick={downloadPDF} cursor="pointer"/>  
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


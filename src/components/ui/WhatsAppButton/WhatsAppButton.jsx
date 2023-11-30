import { Button, Link } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = ( { service } ) => {

    const phoneNumbers = ['+525587648456', '+525580132125', '+525573547093', '+525514178078'];
        // const phoneNumbers = ['+525587648456'];


    const defaultMessage = `Hola, me gustaría saber más sobre el servicio de ${service} a través del sitio web de Fiscal Legum Corporatum.`;

    const whatsappUrls = phoneNumbers.map((phoneNumber) => {
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;
      });
    
      const handleButtonClick = () => {
        whatsappUrls.forEach((url) => {
          window.open(url, '_blank');
        });
      };


    return (
        <Button 
            colorScheme="green"
            leftIcon={<FaWhatsapp />}
            onClick={handleButtonClick}
        >
            Contacta a nuestro equipo de forma directa
        </Button>
    );
};



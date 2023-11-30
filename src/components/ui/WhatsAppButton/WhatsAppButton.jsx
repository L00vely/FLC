import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

export const WhatsAppButton = ( { service } ) => {

    const phoneNumbers = ['+525587648456', '+525580132125', '+525573547093', '+525514178078'];
      
    const defaultMessage = `Hola, me gustaría saber más sobre el servicio de ${service} a través del sitio web de Fiscal Legum Corporatum.`;

    const handleButtonClick = () => {
      phoneNumbers.forEach((phoneNumber) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappUrl, '_blank');
      });
    };

    return (
        <Button 
            colorScheme="green"
            onClick={handleButtonClick}
            p="1rem"
            
        > 
          <Text as="span">
            Contáctanos
          </Text>

        </Button>
    );
};



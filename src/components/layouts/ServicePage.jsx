import { useParams } from "react-router-dom";
import { ServicesGrid } from "../ServicesSection";
import { Contact } from "../ContactSection/Contact/Contact";
import { Box, VStack, Image, Text, HStack } from "@chakra-ui/react";
import { useGetServiceBySlug, useGetServices } from "../../hooks";




export const ServicePage = () => {
    const { servicio } = useParams();

    const { service} = useGetServiceBySlug( servicio );

    const { memorizedServices, isLoading  } = useGetServices( servicio);
    
    
    const serviceTitle = service.title || '';

    const whiteIcon = service.whiteIcon || {};

    const whiteIconUrl = whiteIcon.url || '';
   

    const newServices = memorizedServices.filter( service => service.title !== serviceTitle );
    
    return (
        <>
            <Box 
                as="section"
                className="animate__animated animate__fadeIn"
                
            >
                <VStack
                    spacing="2rem"
                >
                    <Box 
                        bg="red.100"
                        p="2rem"
                        borderRadius="10rem"
                        w={["7rem", "10rem"]}
                        h="auto"
                    >
                        <Image  
                            src={ whiteIconUrl  } 
                            alt={`Icono del servicio de ${ serviceTitle }`} 
                        />
                    </Box>
                   
                    <Text
                        as="h1"
                        textAlign="center"
                    >
                        { serviceTitle }
                    </Text>
                </VStack>


                <VStack 
                    as="section"                   
                    className="animate__animated animate__fadeIn"
                >
                    <Text 
                        as="h2"
                        color="red.100"
                    >
                        Otras áreas
                    </Text>

                    <ServicesGrid services={ newServices } isLoading= { isLoading } />
                    
                </VStack>
            </Box>

        </> 
    )
}

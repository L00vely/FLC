import { useParams } from "react-router-dom";
import { ServicesGrid } from "../ServicesSection";
import { Box, VStack, Image, Text } from "@chakra-ui/react";
import { useGetServiceBySlug, useGetServices } from "../../hooks";
import { DesarrolloWeb, Contabilidad, AsesoriaCorporativa, AsesoriaLegal, LitigioFiscal, RelacionesInstitucionales, Remuneracion, ConsultoriaFiscal } from "./services";
import './services/services.scss'

export const ServicePage = () => {
    const { servicio } = useParams();

    const { service} = useGetServiceBySlug( servicio );

    const { memorizedServices, isLoading  } = useGetServices( servicio);
    
    
    const serviceTitle = service.title || '';

    const serviceSlug = service.slug || '';

    const whiteIcon = service.whiteIcon || {};

    const whiteIconUrl = whiteIcon.url || '';
   

    const newServices = memorizedServices.filter( service => service.title !== serviceTitle );
    
    return (
        <>
            <VStack
                as="section"
                className="animate__animated animate__fadeIn"
                spacing="2rem"
                width="100vw"
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

                {   serviceSlug  === "contabilidad" ? (
                    <Contabilidad />
                ) : (
                        serviceSlug  === "asesoria-y-consultoria-fiscal" ? (
                            <ConsultoriaFiscal />
                        ) : (
                            serviceSlug  === "asesoria-legal" ? (
                                <AsesoriaLegal />
                            ) : (
                                serviceSlug  === "litigio-fiscal" ? (
                                    <LitigioFiscal />
                                ) : (
                                    serviceSlug  === "esquemas-de-remuneracion-para-ejecutivos" ? (
                                        <Remuneracion />
                                    ) :  (
                                        serviceSlug  === "asesoria-corporativa" ? (
                                            <AsesoriaCorporativa />
                                        ) :  (
                                            serviceSlug  === "relaciones-institucionales" ? (
                                                <RelacionesInstitucionales />
                                            ) :  (
                                                serviceSlug  === "litigio-fiscal" ? (
                                                    <LitigioFiscal />
                                                ) 
                                            :
                                            (
                                                <DesarrolloWeb />
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )}


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
            </VStack>

        </> 
    )
}

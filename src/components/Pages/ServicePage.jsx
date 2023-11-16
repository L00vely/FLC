import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DesarrolloWeb, Contabilidad, Remuneracion, ConsultoriaFiscal, AsesoriaCorporativa, AsesoriaLegal, LitigioFiscal, RelacionesInstitucionales } from "./services";
import { ServiceCard } from '../ServicesSection/ServiceCard/ServiceCard';
import { Contact } from "../ContactSection/Contact/Contact";
import { getService } from "../../helpers/getService";
import { services } from "../../util/services";
import './services/services.scss'
import { Box, VStack, Image, useBreakpointValue, Text, Flex } from "@chakra-ui/react";



export const ServicePage = ( ) => {
    const [ imgUrl, setImgUrl ] = useState('');
    const { servicio } = useParams();
    
    const navigate = useNavigate();

    const newServices = services.filter(service => service.title.toLowerCase().replace(/ /g, "-") !== servicio.replace(/_/g, "-"));
    
    let serviceTitle = servicio.toUpperCase();

    serviceTitle = serviceTitle.replace(/_/g, " ");

   

    useEffect(() => {
        const findService = getService(serviceTitle)[0];
        if (findService === null){
           return navigate("/servicios");
        }
        setImgUrl(findService.imgSrc);
     },[ servicio ]);
    
    
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
                            src={ `/icons/icons8-${imgUrl}-100.png` } 
                            alt={`Icono del servicio de ${ servicio }`} 
                        />
                    </Box>
                   
                    <Text
                        as="h1"
                        textAlign="center"
                    >
                        { serviceTitle }
                    </Text>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="2rem"
                        p="2rem"
                    >
                        {   serviceTitle === "CONTABILIDAD" ? (
                            <Contabilidad />
                        ) : (
                                serviceTitle === "ASESORIA Y CONSULTORIA FISCAL" ? (
                                    <ConsultoriaFiscal />
                                ) : (
                                    serviceTitle === "ASESORIA LEGAL" ? (
                                        <AsesoriaLegal />
                                    ) : (
                                        serviceTitle === "ASESORIA LEGAL" ? (
                                            <LitigioFiscal />
                                        ) : (
                                            serviceTitle === "ESQUEMAS DE REMUNERACIÓN PARA EJECUTIVOS" ? (
                                                <Remuneracion />
                                            ) :  (
                                                serviceTitle === "ASESORIA CORPORATIVA" ? (
                                                    <AsesoriaCorporativa />
                                                ) :  (
                                                    serviceTitle === "RELACIONES INSTITUCIONALES" ? (
                                                        <RelacionesInstitucionales />
                                                    ) :  (
                                                        serviceTitle === "LITIGIO FISCAL" ? (
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
                    </Box>


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
                
                    <Flex 
                        flexWrap="wrap"
                    >   
                        {
                            newServices.map( service => (
                                <ServiceCard key={service.title} { ...service }/>
                            ))
                        }
                    </Flex>
                </VStack>
            </Box>
            <Contact />
        </> 
    )
}

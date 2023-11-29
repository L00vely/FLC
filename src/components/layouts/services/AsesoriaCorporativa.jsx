import {  Text, VStack, List, ListItem } from "@chakra-ui/react"

export const AsesoriaCorporativa = () => {
    const servicios = [
        "Elaboración y supervisión de actas de asamblea de accionistas sean ordinarios o extraordinarios, otorgamiento y revocación de poderes, y cancelación de estos.",
        "Apoyo para la elaboración de estatutos para la creación de sociedades mercantiles y sociedades y asociaciones civiles, cooperativas de producción de servicios",
        "Elaboración y revisión de contratos civiles, mercantiles y laborales que requiera la empresa para la realización de sus operaciones.",
        "Elaboración y presentación de demandas civiles y mercantiles.",
        "Actualización corporativa de los libros de la empresa.",
        "Auditoria legal.",
        "Recuperación de cartera vencida, ya sea por la via judicial a la extrajudicial, presentando, inclusive juicios mercantiles de acción cambiaria directa, para tratar de hacer líquidos, pagares, cheques, letras de cambio, etc. "
    ]

    return (
        <VStack p="2rem">
            <Text as="p" style={{color: 'black'}}>Este servicio consiste en:</Text>

            <List  p="2rem" display="flex" flexDir="row" gap="1rem" flexWrap="wrap"  justifyContent="center">
                {
                    servicios.map( (servicio, index) => {
                        return (
                            <ListItem 
                                display="flex" 
                                flexDirection="row" 
                                bg="red.100" p="2rem" 
                                textAlign="center" 
                                alignItems="center" 
                                justifyContent="flex-start"
                                w={["100%", "100%", "20%"]}
                                gap="1rem"
                                key={index}
                            >
                                
                                <Text as="p" color="red.100" h="100%" bg="white.100" >.</Text>
                        
                                <Text as="p" color="white.100" textAlign="start">{ servicio }</Text>

                            </ListItem>
                        )
                    })
                }
            </List>
        </VStack>
    )
}

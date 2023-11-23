import {  Text, HStack, Flex, VStack, List, ListItem } from "@chakra-ui/react"

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
            <Text as="h2" style={{color: 'black'}}>Este servicio consiste en:</Text>

            <List  p="2rem" display="flex" flexDir="row" gap="1rem">
                {
                    servicios.map( servicio => {
                        return (
                            <ListItem bg="red.100" color="white.100" p="2rem">{ servicio }</ListItem>
                        )
                    })
                }
            </List>
        </VStack>
    )
}

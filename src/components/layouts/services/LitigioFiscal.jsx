import {  Text, VStack, List, ListItem } from "@chakra-ui/react"

export const LitigioFiscal = () => {
    const servicios = [
        "Defensa ante autoridades fiscales y demás entidades y organismos regulatorios.",
        "Recursos administrativos ante autoridades fiscales y regulatorios.",
        "Promoción de recursos administrativos vinculados con autorizaciones y/o confirmaciones en materia tributaria y de comercio exterior"
    ]

    return (
        <VStack p="2rem">
            <Text as="p" p="2rem">
                Nuestro servicio de litigio fiscal consiste en la defensa de los intereses de nuestros clientes ante las autoridades fiscales, en las diversas instancias 
                administrativas y judiciales, así como en la interposición de los recursos administrativos que procedan, con el fin de lograr la defensa de los derechos 
                de nuestros clientes, en el ámbito fiscal y de comercio exterior.
            </Text>

            <Text as="h2">Los servicios que ofrecemos son:</Text>
            
            <List  p="2rem" display="flex" flexDir="row" gap="1rem" flexWrap="wrap"  justifyContent="center"> 
                {servicios.map((servicio, index) => <ListItem 
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
                </ListItem>)}
            </List> 
          
        </VStack>
    )
}

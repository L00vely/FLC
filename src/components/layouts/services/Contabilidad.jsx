import {  Text, HStack, VStack, List, ListItem } from "@chakra-ui/react"

export const Contabilidad = () => {
    return (
        <VStack p="2rem">
            <Text as="p">Disponer de información contable, fiscal, y financiera de manera veraz y oportuna para la toma de decisiones, es una necesidad que los clientes de nuestra firma satisfacen 
                ampliamente a través de servicios de procesamiento de información, compliance fiscal y supervisión de la contabilidad.</Text>

            <Text as="h2">Los servicios que ofrecemos son:</Text>
            
            <HStack>
                <VStack bg="red.100" p="2rem" >
                    <Text as="h3" color="white.100">Contabilidad de personas físicas y morales:</Text>

                    <List > 
                        <ListItem color="white.100">Estados financieros (balance general y perdidas y/o ganancias).</ListItem>
                        <ListItem color="white.100">Conciliaciones bancarias.</ListItem>
                        <ListItem color="white.100">Depuración de cuentas.</ListItem>
                        <ListItem color="white.100">Arqueo de caja.</ListItem>
                        <ListItem color="white.100">Revisión de contribuciones.</ListItem>
                        <ListItem color="white.100">Razones financieras.</ListItem>
                        <ListItem color="white.100">Trabajos especiales.</ListItem>
                        <ListItem color="white.100">Revisión del debido cumplimiento de sus oblicaciones fiscales federales y locales.</ListItem>
                        <ListItem color="white.100">Implementación de las NIF's.</ListItem>
                    </List> 
                </VStack>
              
                <Text as="p"  p="2rem">
                    Contamos también con la elaboración y/o revisión del correcto llenado de sus pagos privisionales, o declaración anual a que éste afecta su 
                        empresa en las diversas contribuciones de carácter fiscal <strong>con un costo adicional</strong>.
                </Text>
              
            </HStack>
        </VStack>
    )
}

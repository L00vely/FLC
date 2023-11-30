import { Text, VStack } from "@chakra-ui/react"


export const AsesoriaLegal = () => {
    return (
        <VStack p="2rem">
            <Text as="p" p="2rem">
                Nuestro servicio de asesoría legal se encarga de brindar la información jurídica a quien necesite de ello para la resolución de asuntos
                que tienen que ver con la aplicación de las leyes, normativas, y reglamentos en cualquier materia del derecho, que como hemos visto, se encuentran sujetas a constantes
                modificaciones, adiciones y derogaciones; lo cual puede afectar tanto la seguridad jurídica	de las empresas, como su situacion económica y financiera.
            </Text>

            <Text as="p" p="2rem">
                Por esa circunstancia, se hace necesario que toda empresa cuente con expertos en materia jurídica que estén al pendiente de dichos cambios y adviertan de los efectos y consecuencias legales, fiscales 
                y económicas y sobre todo que actúen preventiva y rápidamente para salvaguardar los intereses de la empresa.
            </Text>

            <Text as="p" p="2rem">
                Estamos conscientes de esa necesidad, por lo que contamos con un área especializada en materia legal y fiscal, que comprende los <strong>siguientes servicios</strong>:
            </Text>

            <Text as="strong" p="2rem" bg="red.100" color="white.100">Asesoría legal vinculada con el ámbito fiscal, corporativo, de comercio exterior, laboral, de propiedad intelectual y de lavado de dinero.</Text>
            
           
        </VStack>
    )
}

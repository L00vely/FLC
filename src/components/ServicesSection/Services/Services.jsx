
import { Text, Flex, Skeleton } from '@chakra-ui/react';
import { ServicesGrid } from '../ServicesGrid';
import { useGetServices } from '../../../hooks';

export const Services = () => {    

    const { memorizedServices, isLoading } = useGetServices();
    
    return (
        <Flex 
            as='section' 
            className="animate__animated animate__fadeIn"
            direction='column'
            align='center'
            justify='center'
            w='100%'
            gap='2rem 4rem'
        >
            
            <Text as='h2'>SERVICIOS</Text>
            <Text as='p'>Nuestras áreas son las siguientes</Text>

            <Skeleton 
                w='100%'
                isLoaded={!isLoading} 
            > 
                <ServicesGrid services={ memorizedServices } isLoading={isLoading}/>
            </Skeleton>
        </Flex>
    )
}

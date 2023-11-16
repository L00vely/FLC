
import { Grid, Text, Flex } from '@chakra-ui/react';
import { services } from '../../../util/services';
import { ServiceCard } from '../ServiceCard/ServiceCard';

export const Services = () => {    
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
            <Grid
                gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, .4fr)', 'repeat(2, .4fr)',  'repeat(3, .25fr)']}
                gap='4rem'
                w='100%'
                justifyContent='center'
                alignItems='center'
                className='animate__animated animate__fadeIn'
            >
                {
                    services.map( service => (
                        <ServiceCard key={service.title} { ...service }/>
                    ))
                }
            </Grid>
            

        </Flex>
    )
}

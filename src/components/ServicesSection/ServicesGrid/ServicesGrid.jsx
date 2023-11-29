import { Grid } from '@chakra-ui/react';
import { ServiceCard } from '../ServiceCard';

export const ServicesGrid = (props) => {
    const { services, isLoading } = props;

    return (
        <Grid
            gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, .4fr)', 'repeat(3, .4fr)',  'repeat(4, .5fr)']}
            gap='1rem'
            p="2rem"

            w='100%'
            justifyContent='center'
            alignItems='center'
            className='animate__animated animate__fadeIn'
        > 
            {
                !isLoading ? (
                    services?.map((service) => (
                      <ServiceCard key={service.title} {...service} />
                    ))
                  ) : null
                  
            }
        </Grid>      
    )
}

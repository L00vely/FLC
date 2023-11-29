import { Grid } from '@chakra-ui/react';
import { CircularCard } from '../CircularCard';

export const CircularsGrid = (props) => {
    const { circulars , isLoading } = props;

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
                    circulars?.map((circular) => (
                      <CircularCard key={circular.title} {...circular} />
                    ))
                  ) : null
                  
            }
        </Grid>      
    )
}

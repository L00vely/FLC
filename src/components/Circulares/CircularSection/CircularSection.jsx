import { useState, useEffect } from 'react';
import { CircularCard } from '../CircularCard/CircularCard'
import { circulares } from '../../../util/circulares'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { HStack, Flex, Grid, Text, Button } from '@chakra-ui/react';


export const CircularSection = ({ limit }) => {  
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ offset, setOffset ] = useState(0);
    const [ totalPosts, setTotalPosts ] = useState(0);
    const [ totalPages, setTotalPages ] = useState(1);

     // Obtenemos el número total de circulares
    useEffect(() => {    
        const totalPosts = circulares.length;
        setTotalPosts(totalPosts);
        
        const totalPages = Math.ceil(totalPosts / limit);
        setTotalPages(totalPages);
    }, []);

    // Decrementamos el offset
    const decrementOffset = () => {
        if (offset > 0) {
            setOffset((current) => current - 1);
            setCurrentPage((current) => current - 1)
        }else if(offset === 0){
            setOffset(totalPages - 1);
        }
    };
    
    // Incrementamos el offset
    const incrementOffset = () => {
        if (offset < totalPages - 1) {
            setOffset((current) => current + 1);
            setCurrentPage((current) => current + 1)
        } else if(offset === totalPages - 1){
            setOffset(0);
        }
    };

    const visibleImages = circulares.slice(offset*3, offset*3 + limit);

    return (
        <Flex
            as='section'
            className="animate__animated animate__fadeIn"
            direction='column'
            align='center'
            justify='center'
            w='100%'
            gap='2rem 4rem'
            m="2rem 0rem"
        >
            <Text as='h2'>CIRCULARES</Text>
            <Text as='p'>Avisos importantes</Text>

            <Grid
                gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, .4fr)', 'repeat(2, .4fr)',  'repeat(3, .25fr)']}
                gap='4rem'
                w='100%'
                justifyContent='center'
                alignItems='center'
                className='animate__animated animate__fadeIn'
            >
                {
                    visibleImages.map( circular => {
                        return(
                            <CircularCard 
                                {...circular}
                                key={circular.title}
                            />
                        )
                    })
                }
            </Grid>
                <HStack spacing="2rem">
                    <Button bg="red.100" onClick={ decrementOffset } _hover={{ backgroundColor: "white.100" }}> <ArrowBackIcon /> </Button>

                    <Text as="span">{ offset + 1 } / { totalPages } </Text>
            
                    <Button bg="red.100" onClick={ incrementOffset } _hover={{ backgroundColor: "white.100" }}> <ArrowForwardIcon/> </Button>
                </HStack>
        </Flex>
    )
}

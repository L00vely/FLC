import { useState, useEffect } from 'react';
import { CircularCard } from '../CircularCard/CircularCard'
import { circulares } from '../../../util/circulares'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { Box, Flex, Grid, Text } from '@chakra-ui/react';


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

            {
                limit !== 9 ? (
         
                    <div className='pagination-buttons'>
                        <button className="red-button" onClick={ decrementOffset }> <AiFillCaretLeft /> </button>

                        <span>{ offset + 1 } / { totalPages } </span>
                
                        <button className="red-button" onClick={ incrementOffset }> <AiFillCaretRight /> </button>
                    </div>
                    
                ): null
            }

            

        </Flex>
    )
}

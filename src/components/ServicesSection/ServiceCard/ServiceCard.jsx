import { Link, useNavigate  } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types'; 
import { Text, Card, Box, Image, HStack, Tooltip, VStack, Divider, Flex, Button } from "@chakra-ui/react";
import { ChatIcon  } from '@chakra-ui/icons';


export const ServiceCard = ( { title, slug, icon, description }) => {
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023 });

    const handleClick = () => {
        navigate(`/servicios/${slug}`);
    }
    
    const cardStyles = {
        gap: '1.5rem',
        bg: 'white.200  ',
        width: "100%",
        alignSelf: "flex-start",
       
    };

    return (
        
        <Card 
            p="2rem"
            { ...cardStyles }
        >   
            <VStack >
                <Box 
                    title={`Icono del servicio de ${title}`}        
                >
                    <Image  
                        src={ icon.url  } 
                        alt={`Icono del servicio de ${title}`}                
                    />
                </Box>

                <Text as='h3' textAlign="center"> { title }</Text>

                <Text 
                    as='p'
                    hidden={isMobile}
                >
                    { description }
                </Text>

                <Divider borderWidth=".1rem"/>


                <HStack w="100%">
                    <Button 
                        color="red.100" 
                        size="sm"
                        variant='link'
                        p=".5rem"
                        // _hover={{
                        //     variant: 'solid',
                        //     bg: 'red.100',
                        // }}
                        onClick={handleClick}
                    >
                        Leer más
                    </Button>

                    {/* <Tooltip label="Abrir en otra pestaña" aria-label="Abrir en otra pestaña">
                        <ChatIcon mr=".5rem" />              
                    </Tooltip> */}
                </HStack>

                {/* <Link to={`/servicios/${serviceUrl}`} className="link view-more-container">
                    Leer más
                    <div className='icon-container'>
                        <img src='/icons/icons8-derecha-50.png' alt="Icono de ver más"/>
                    </div>
                </Link> */}
            </VStack>
            
        </Card>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
}


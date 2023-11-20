import { Link  } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types'; 
import { Text, Card, Box, Image } from "@chakra-ui/react";



export const ServiceCard = ( { title, slug, icon }) => {

    const isMobile = useMediaQuery({ maxWidth: 1023 });
    
    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        bg: 'white.100',
        p: '2rem',
        gap: '1.5rem',
        transition: '.4s', 
        
        width: "100%",

        _hover: {
            transform: 'scale(1.05)',
            boxShadow: '0 0 1rem #A80000',
        },
    };

    return (
        
        <Card 
            as={Link} 
            to={`/servicios/${slug}`}  
            height="100%"
            align= {["center"]}
            justify= {["center", "flex-start"]}
            
            { ...cardStyles }
        >
            <Box 
                
                title={`Icono del servicio de ${title}`}        
            >
                <Image  
                    src={ icon.url  } 
                    alt={`Icono del servicio de ${title}`}                
                />
            </Box>

         

            <Text as='h3' textAlign="center"> { title }</Text>

            {/* <Text 
                as='p'
                hidden={isMobile}
            >
                { description }
            </Text> */}

            {/* <Link to={`/servicios/${serviceUrl}`} className="link view-more-container">
                Leer más
                <div className='icon-container'>
                    <img src='/icons/icons8-derecha-50.png' alt="Icono de ver más"/>
                </div>
            </Link> */}
        </Card>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}


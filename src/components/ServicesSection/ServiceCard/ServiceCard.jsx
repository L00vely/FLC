import { Link  } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { Text, Card, Box, Image } from "@chakra-ui/react";

export const ServiceCard = ( { title, imgSrc, description}) => {
    const imgUrl = `/icons/icons8-${imgSrc}-50.png`;
    
    const serviceUrl = title.toLowerCase().replace(/ /g, "_");
    
    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        bg: 'white.100',
        p: '2rem',
        gap: '1.5rem',
        transition: '.4s', 
        align: "center",
        width: "100%",

        _hover: {
            transform: 'scale(1.05)',
            boxShadow: '0 0 1rem #A80000',
        },
    };



    return (
        
        <Card 
            as={Link} 
            { ...cardStyles }
        >
            <Box 
                as={Link} 
                to={`/servicios/${serviceUrl}`} 
                title="Fiscal Legum Corporatum"
            >
                <Image  
                    src={ imgUrl } 
                    alt={`Icono del servicio de ${title}`}                
                />
            </Box>

         

            <Text as='h3'> { title }</Text>
            <Text as='p'>{ description }</Text>

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
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


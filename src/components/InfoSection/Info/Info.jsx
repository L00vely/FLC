import PropTypes from 'prop-types'; 
import { Box, Text, VStack } from "@chakra-ui/react";
import './info.scss'

export const Info = ({ imgSrc, description, title }) => {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        textAlign: 'center',
 
    };
    
    
    return (
       
        <VStack 
            h="100%"
            w="100%"
            style={containerStyle}
        >
            <Text 
                as="h1" 
                color="white.100"
                fontWeight="bold"
                fontSize="5xl"
                borderBottom={'2px solid'}
                borderColor="red"
            >
                {title}
            </Text>
            <Text as="p"  p="4rem" color="white.100">{description}</Text>
        </VStack>

    )
}

Info.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

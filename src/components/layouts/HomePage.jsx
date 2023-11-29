import { InfoArea } from "../InfoSection/InfoArea/InfoArea"
import { Services } from '../ServicesSection/Services/Services';
import { CircularSection } from '../Circulares/CircularSection/CircularSection';
import { Contact } from "../ContactSection/Contact/Contact"; 
import { VStack } from "@chakra-ui/react";

export const HomePage = () => {

    return (
        <VStack>
            <InfoArea />

            <Services />

            <CircularSection limit={3}/>

            <Contact />
        </VStack>

        
    )
}

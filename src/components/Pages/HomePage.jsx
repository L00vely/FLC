import { InfoArea } from "../InfoSection/InfoArea/InfoArea"
import { Services } from '../ServicesSection/Services/Services';
import { CircularSection } from '../Circulares/CircularSection/CircularSection';
import { Contact } from "../ContactSection/Contact/Contact"; 

export const HomePage = () => {

    return (
        <>
            <InfoArea />

            <Services />

            <CircularSection />

            <Contact />
        </>

        
    )
}

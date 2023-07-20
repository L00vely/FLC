import { InfoArea } from "../InfoSection/InfoArea";
import { Contact } from "../ContactSection/Contact";
import { Services } from '../ServicesSection/Services';
import { CircularSection } from "../Circulares/CircularSection";

export const HomePage = () => {

    return (
        <main className="animate__animated animate__fadeIn">
            <InfoArea />

            <h2>SERVICIOS</h2>
            <Services />

            <h2>CIRCULARES</h2>
            <CircularSection />

        
            <Contact />
        </main>

        
    )
}

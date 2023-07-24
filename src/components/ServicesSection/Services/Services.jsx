
import { services } from '../../../util/services';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import './services.scss';

export const Services = () => {    
    return (
        <section className="services-container animate__animated animate__fadeIn">
            
            <h2>SERVICIOS</h2>
            <p>Nuestras áreas son las siguientes</p>
            <div className="services-grid-container">
                {
                    services.map( service => (
                        <ServiceCard key={service.title} { ...service }/>
                    ))
                }
            </div>
            

        </section>
    )
}

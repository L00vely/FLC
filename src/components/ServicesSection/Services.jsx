
import { services } from "../../util/services"
import { ServiceCard } from "./ServiceCard"

export const Services = () => {
    
    
    return (
        <div className="services-container">
            <h2>SERVICIOS</h2>
            <h3>Nuestras áreas son las siguientes</h3>
            <div className="services-grid-container">
                {
                    services.map( service => (
                        <ServiceCard key={service.title} { ...service }/>
                    ))
                }
            </div>
            

        </div>
    )
}


import { services } from "../../util/services"
import { ServiceCard } from "./ServiceCard"

export const Services = () => {
    
    
    return (
        <section className="services-container animate__animated animate__fadeIn">
            
         
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

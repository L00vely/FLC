import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DesarrolloWeb, Contabilidad, Remuneracion, ConsultoriaFiscal, AsesoriaCorporativa, AsesoriaLegal } from "./services";
import { ServiceCard } from '../ServicesSection/ServiceCard/ServiceCard';
import { Contact } from "../ContactSection/Contact/Contact";
import { getService } from "../../helpers/getService";
import { services } from "../../util/services";
import './services/services.scss'



export const ServicePage = ( ) => {
    const [ imgUrl, setImgUrl ] = useState('');
    const { servicio } = useParams();
    
    const navigate = useNavigate();

    const newServices = services.filter(service => service.title.toLowerCase().replace(/ /g, "-") !== servicio.replace(/_/g, "-"));
    
    let serviceTitle = servicio.toUpperCase();

    serviceTitle = serviceTitle.replace(/_/g, " ");

    

    useEffect(() => {
        const findService = getService(serviceTitle)[0];
        if (findService === null){
           return navigate("/servicios");
        }
        setImgUrl(findService.imgSrc);
     },[ servicio ]);
    

    return (
        <>
            <section className="service-container animate__animated animate__fadeIn">
                <div className="service-top-container">
                
                    <div className='icon-container'>
                        <img src={ `/icons/icons8-${imgUrl}-100.png` } alt={`Icono del servicio de ${ servicio }`} />
                    </div>
                    <h1>{ serviceTitle }</h1>
                </div>
                
                
                {   serviceTitle === "CONTABILIDAD" ? (
                    <Contabilidad />
                ) : (
                        serviceTitle === "ASESORIA Y CONSULTORIA FISCAL" ? (
                            <ConsultoriaFiscal />
                        ) : (
                            serviceTitle === "ASESORIA LEGAL" ? (
                                <AsesoriaLegal />
                            ) : (
                                serviceTitle === "ASESORIA LEGAL" ? (
                                    <LitigioFiscal />
                                ) : (
                                    serviceTitle === "ESQUEMAS DE REMUNERACIÓN PARA EJECUTIVOS" ? (
                                        <Remuneracion />
                                    ) :  (
                                        serviceTitle === "ASESORIA CORPORATIVA" ? (
                                            <AsesoriaCorporativa />
                                        ) :  (
                                            serviceTitle === "RELACIONES INSTITUCIONALES" ? (
                                                <RelacionesInstitucionales />
                                            ) :  (
                                                <DesarrolloWeb />
                                        )
                                    )
                                )
                            )
                        )
                    )
                )}
            </section>

            <section className="services-container animate__animated animate__fadeIn">
            
                <h2>Otras áreas</h2>
               
                <div className="services-grid-container">   
                
                    {
                        newServices.map( service => (
                            <ServiceCard key={service.title} { ...service }/>
                        ))
                    }
                </div>
           
                

            </section>
                                            
            
          

            <Contact />
        </>
        
    )
}

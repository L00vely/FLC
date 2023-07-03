import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../helpers/getService";
import { Contabilidad } from "./services/Contabilidad";
import { ConsultoriaFiscal } from "./services/ConsultoriaFiscal";
import { AsesoriaLegal } from "./services/AsesoriaLegal";
import { Contact } from "../ContactSection/Contact";
import { LitigioFiscal } from "./services/LitigioFiscal";
import { Remuneracion } from "./services/Remuneracion";
import { AsesoriaCorporativa } from "./services/AsesoriaCorporativa";
import { RelacionesInstitucionales } from "./services/RelacionesInstitucionales";
import { Devolucion } from "./services/Devolucion";


export const ServicePage = ( ) => {
    const [ imgUrl, setImgUrl ] = useState('');
    const { servicio } = useParams();
    
    
    const navigate = useNavigate();

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
        <main className="animate__animated animate__fadeIn">
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
                                            <Devolucion />
                                    )
                                )
                            )
                        )
                    )
                )
            )}

            <Contact />
        </main>
    )
}

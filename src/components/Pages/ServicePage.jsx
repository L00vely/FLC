import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../helpers/getService";
import { Contabilidad } from "./services/Contabilidad";
import { ConsultoriaFiscal } from "./services/ConsultoriaFiscal";


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
                ) : ( <h2>hola</h2>)
            )}

            
        </main>
    )
}

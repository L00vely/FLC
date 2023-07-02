import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getService } from "../../helpers/getService";


export const ServicePage = ( ) => {
    const { servicio } = useParams();
    const navigate = useNavigate();

    let serviceTitle = servicio.toUpperCase();
    serviceTitle = serviceTitle.replace(/_/g, " ");

   

    useEffect(() => {
        const findService = getService(serviceTitle);

        if (findService.length === 0){
           return navigate("/servicios");
        }
     },[ servicio ]);
    

    return (
        <main className="animate__animated animate__fadeIn">
            <h1>{ serviceTitle }</h1>
        </main>
    )
}

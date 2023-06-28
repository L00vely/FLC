import { useParams } from "react-router-dom";


export const ServicePage = ( ) => {
    const { servicio } = useParams();

    let serviceTitle = servicio.charAt(0).toUpperCase() + servicio.slice(1);
    serviceTitle = serviceTitle.replace(/_/g, " ");

    return (
        <div className="service-container">
            <h2>{ serviceTitle }</h2>
        </div>
    )
}

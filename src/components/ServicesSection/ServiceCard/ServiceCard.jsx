import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
import './serviceCard.scss'

export const ServiceCard = ( { title, imgSrc, description}) => {
    const imgUrl = `/icons/icons8-${imgSrc}-50.png`;
    const serviceUrl = title.toLowerCase().replace(/ /g, "_");

    return (
        
        <Link to={`/servicios/${serviceUrl}`} className='service-card-container link' >
            
            <div className='icon-container'>
                <img src={ imgUrl } alt={`Icono del servicio de ${title}`} />
            </div>

            <h3 className="card-title"> { title }</h3>
            <p className="card-description">{ description }</p>

            {/* <Link to={`/servicios/${serviceUrl}`} className="link view-more-container">
                Leer más
                <div className='icon-container'>
                    <img src='/icons/icons8-derecha-50.png' alt="Icono de ver más"/>
                </div>
            </Link> */}
        </Link>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

export const ServiceCard = ( { title, imgSrc, description}) => {
    return (
        <div className='service-card-container'>
            <div className='icon-container'>
                <img src={'/public/icons/icons8-whatsapp-50.png'} alt="Icono de Whatsapp" />
            </div>

            <h3> { title }</h3>
            <p>{ description }</p>

            <Link to={`/${description}`} className="link">
                Más información...
            </Link>
        </div>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.array.isRequired,
    imgSrc: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
}


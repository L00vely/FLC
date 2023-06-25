import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 

export const ServiceCard = ( { title, imgSrc, description}) => {
    const imgUrl = `/public/icons/icons8-${imgSrc}-50.png`;

    return (
        <div className='service-card-container'>
            <div className='icon-container'>
                <img src={ imgUrl } alt="Icono de Whatsapp" />
            </div>

            <h3> { title }</h3>
            <p>{ description }</p>

            <Link to={`/uwu`} className="link view-more-container">
                Leer más
                <div className='icon-container'>
                    <img src='/public/icons/icons8-nuevo-post-50.png' alt="Icono de ver más"/>
                </div>
            </Link>
        </div>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.array.isRequired,
    imgSrc: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
}


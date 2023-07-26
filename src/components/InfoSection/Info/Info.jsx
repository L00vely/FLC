import PropTypes from 'prop-types'; 
import './info.scss'

export const Info = ({ imgSrc, description, title }) => {
    const containerStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.9)), url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };
    
    
    return (
        <div className="info-container">
            <div className="info-text-container"
                style={containerStyle}
            >
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

Info.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

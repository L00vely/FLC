import PropTypes from 'prop-types'; 


export const MovilElement = ({ description, title }) => {
    return (
       
        <div className="info-text-container">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        
    )
}

MovilElement.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

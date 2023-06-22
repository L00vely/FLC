import PropTypes from 'prop-types'; 


export const Info = ({ imgSrc, description, title }) => {
    return (
        <div id='image' className="info-container">
            <div  className="info-image-container">
                <img  src={imgSrc} alt="" />
            </div>
            <div className="info-text-container">
                <h2>{title}</h2>
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

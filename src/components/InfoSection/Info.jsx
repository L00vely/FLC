import PropTypes from 'prop-types'; 


export const Info = ({ imgSrc, description, title }) => {

    return (
        <div className="info-container" style={{ backgroundImage: `url(${imgSrc})` }}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

Info.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

import PropTypes from 'prop-types'; 
import { MovilElement } from "./MovilElement";

export const InfoMovil = ({ sections }) => {
    return (
        <div className="sections-container">
            { sections.map((section) => (
                <MovilElement  key={section.title} title={section.title} description={section.description}/>
            ))}  
        </div>
    )
}


InfoMovil.propTypes = {
    sections: PropTypes.array.isRequired,
}

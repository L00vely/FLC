
import PropTypes from 'prop-types'; 
import { useState } from 'react';

export const InfoTitles = ({ title, idx, changeSection }) => {
    const [ active, setActive ] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
        changeSection(idx);
    }

    const handleMouseOut = () => {
        setActive(false);
    }

    return (
        <div
            className={`section-name ${active ? 'red' : 'gray'}`}            
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}

        >
            <h2>{title}</h2>
        </div>
    )
}

InfoTitles.propTypes = {
    title: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
    changeSection: PropTypes.func.isRequired
    
}

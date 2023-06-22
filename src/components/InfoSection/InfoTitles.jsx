
import PropTypes from 'prop-types'; 
import { useState, useEffect } from 'react';


export const InfoTitles = ({ title, idx, changeSection, selectedSection = 0 }) => {
    
    const [ isAnimating, setIsAnimating ] = useState(false);
    const [ timeoutId, setTimeoutId ] = useState(null);

    useEffect(() => {
        const element = document.getElementById('image');
        if (isAnimating) {
            element.classList.add('animacion');
        } else {
            element.classList.remove('animacion');
        }
    }, [isAnimating]);

    const handleDelayedFunction = () => {
        changeSection(idx);
        setIsAnimating(true);
    };

    const handleMouseOver = () => {
      
        if (timeoutId) {
            clearTimeout(timeoutId); 
        }

        const newTimeoutId = setTimeout(handleDelayedFunction, 20); 
        setTimeoutId(newTimeoutId); 
    };

    const handleMouseOut = () => {
        clearTimeout(timeoutId); 
        setTimeoutId(null); 
        setIsAnimating(false);
    };


    return (
        <div
            className={`section-name ${selectedSection === idx ? 'red' : 'gray'}`}            
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
    changeSection: PropTypes.func.isRequired,
    selectedSection: PropTypes.number.isRequired
}


import PropTypes from 'prop-types'; 
import { useState, useEffect } from 'react';


export const InfoTitles = ({ title, idx, changeSection }) => {
    const [ active, setActive ] = useState(false);
    const [ isAnimating, setIsAnimating ] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        const element = document.getElementById('image');
        if (isAnimating) {
            element.classList.add('animacion');
        } else {
            element.classList.remove('animacion');
        }
    }, [isAnimating]);

    const handleDelayedFunction = () => {
        setActive(true);
        changeSection(idx);
        setIsAnimating(true);
    };

    const handleMouseOver = () => {
        if (timeoutId) {
            clearTimeout(timeoutId); 
        }

        const newTimeoutId = setTimeout(handleDelayedFunction, 10); 
        setTimeoutId(newTimeoutId); 
    };

    const handleMouseOut = () => {
        clearTimeout(timeoutId); 
        setTimeoutId(null); 
        setActive(false);
        setIsAnimating(false);
    };


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

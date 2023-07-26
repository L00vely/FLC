import { useState } from 'react'; 
import PropTypes from 'prop-types';
import './circularCard.scss'

export const CircularCard = ( { pdf, img, date, title, link }) => {
  const [mouseEncima, setMouseEncima] = useState(false);


  const cambiarAColorRojo = () => {
    setMouseEncima(true);
  };

  const cambiarAColorBlanco = () => {
    setMouseEncima(false);
  };

  const handleImageClick = () => {
    window.open(pdf, '_blank');
  };

  return (
      <div className='circular-card-container animate__animated animate__fadeIn'> 
        <img src={ img } alt={`Miniatura del ${ title }`} onClick={handleImageClick} />

        <div className='circular-card-body'>
          <strong>{ title }</strong>
          <span>{ date }</span>
          <a  href={link} target="_blank" rel="noopener noreferrer" className='link circular-icon' onMouseEnter={cambiarAColorRojo} onMouseLeave={cambiarAColorBlanco}>
            <div className="icon-container">
              <img 
                src={!mouseEncima ? '/icons/linkedin-blanco.png' : "/icons/linkedin-rojo.png" }
                alt="LinkedIn icon"
              />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>

        
      </div>
  )
}

CircularCard.propTypes = {
    pdf: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


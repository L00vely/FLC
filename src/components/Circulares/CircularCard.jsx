import PropTypes from 'prop-types'; 

export const CircularCard = ( { pdf, img, date, title }) => {
  
  const handleImageClick = () => {
    window.open(pdf, '_blank');
  };

  return (
      <div className='circular-card-container animate__animated animate__fadeIn' onClick={handleImageClick}> 
            <img src={img} alt={`Miniatura del ${title}`}/>
            <strong>{title}</strong>
            <span>{date}</span>
      </div>
  )
}

CircularCard.propTypes = {
    pdf: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


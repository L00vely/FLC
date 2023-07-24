
import PropTypes from 'prop-types'; 
export const Button = ({ text, title, ariaLabel }) => {

    return (
        <button className='mobile-button' title={title} aria-label={ariaLabel}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired
}

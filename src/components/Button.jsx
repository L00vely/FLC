
import PropTypes from 'prop-types'; 
export const Button = (props) => {

    const { text } = props;

    return (
        <button>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

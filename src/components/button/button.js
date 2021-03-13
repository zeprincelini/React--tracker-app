import PropTypes from 'prop-types';
import './button.css'

const Button = ({color, text, onClick}) => {

    return <button onClick = {onClick} className="mybtn" style = {{backgroundColor: color}}>{text}</button>
}

Button.defaultProps = {
    color: 'lavender'
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    clickMe: PropTypes.func
}

export default Button;
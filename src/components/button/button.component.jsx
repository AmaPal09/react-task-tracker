//button.component.jsx
import PropTypes from 'prop-types'; 

import './button.component.styles.css'; 


const Button = ({ color, text, onClick}) => {
    return(
        <button 
            style={{ backgroundColor: color}} 
            className="btn"
            onClick={onClick}>
                {text}  
        </button>
    )
}; 

Button.defaultProps = {
    color: 'steelblue', 
    text: 'hello', 
}; 

Button.propTypes = {
    color: PropTypes.string, 
    text: PropTypes.string.isRequired, 
    onClick: PropTypes.func.isRequired, 
};

export default Button; 
//header.component.jsx
import Button from '../button/button.component';

import PropTypes from 'prop-types'; 


const Header = ({ title }) => {
    const handleOnClick = (e) => {
        console.log('Click'); 
    } 

    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={handleOnClick}/> 
        </header>
    )
};

Header.defaultProps = {
    title: 'Task Tracker', 
}; 

Header.propTypes = {
    title: PropTypes.string.isRequired, 
};



export default Header
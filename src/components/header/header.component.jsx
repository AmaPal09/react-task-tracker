//header.component.jsx
import Button from '../button/button.component';

import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom'; 

// import "./header.component.styles.css"; 
import StyledHeader from './header.styled.component';

const Header = ({ title, onAdd, showAdd  }) => {
    const location = useLocation(); 

    return(
        <StyledHeader>
            <h1>{title}</h1>
            { location.pathname==='/' && <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} /> }
        </StyledHeader>
    )
};

Header.defaultProps = {
    title: 'Task Tracker', 
}; 

Header.propTypes = {
    title: PropTypes.string.isRequired, 
};



export default Header
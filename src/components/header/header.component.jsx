//header.component.jsx
import Button from '../button/button.component';

import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom'; 
import { useContext } from 'react';

// import "./header.component.styles.css"; 
import { OnAddContext } from '../../contexts/onAdd.context';
import StyledHeader from './header.styled.component';

// const Header = ({ title, onAdd, showAdd  }) => {
const Header = ({ title }) => {
    const { showAddTask, setShowAddTask } = useContext(OnAddContext)
    const location = useLocation(); 

    const onAddHandler = () => {
        setShowAddTask(!showAddTask); 
    }

    return(
        <StyledHeader>
            <h1>{title}</h1>
            { location.pathname==='/' && <Button 
            // color={showAdd ? 'red' : 'green'} 
            color={showAddTask ? 'red' : 'green'} 
            // text={showAdd ? 'Close' : 'Add'} 
            text={showAddTask ? 'Close' : 'Add'} 
            onClick={onAddHandler} /> }
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
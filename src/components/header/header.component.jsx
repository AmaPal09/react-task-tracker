//header.component.jsx

import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom'; 
import { useContext } from 'react';

import { OnAddContext } from '../../contexts/onAdd.context';
import StyledHeader from './header.styled.component';
import Button from '../button/button.component';


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
            color={showAddTask ? 'red' : 'green'} 
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
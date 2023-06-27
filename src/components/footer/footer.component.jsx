//footer.component.jsx
import { Link } from 'react-router-dom'; 

import { StyledFooter } from './footer.styled.component';


//Footer component
const Footer = () => {
    return(
        <StyledFooter>
            <p>Copyright &copy; 2023</p>
            <Link to="/about">About</Link>
        </StyledFooter>
    )
}; 

export default Footer; 
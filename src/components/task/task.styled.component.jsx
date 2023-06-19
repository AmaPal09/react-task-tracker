//task.styled.component.jsx

import styled, { css } from 'styled-components'; 


const reminderBorder = css`
    border-left: 5px solid green;
`; 

export const SubHeader3 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
`; 

export const TaskContainer = styled.div`
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    ${({border}) => border && reminderBorder}; 
`; 


// task.component.jsx

import { useContext } from 'react'; 

import { FaTimes } from 'react-icons/fa'; 

import { TaskListContext } from '../../contexts/taskList.context';
// import './task.component.styles.css'; 
import { SubHeader3, TaskContainer } from './task.styled.component';

const Task = ({ task }) => {
    const {deleteTask, toggleReminder} = useContext(TaskListContext);
    
    return (
        // <div 
        <TaskContainer
            // className={`task ${task.reminder ? 'reminder': ''}`} 
            border={task.reminder}
            onDoubleClick={()=> toggleReminder(task.id)}>
                {/* <h3> */}
                <SubHeader3> 
                    {task.text}{'   '} 
                    <FaTimes 
                        style={{color:'red', cursor:'pointer'}} 
                        onClick={() => deleteTask(task.id)}/> 
                {/* </h3> */}
                </SubHeader3>
                <p>{task.day}</p>            
        </TaskContainer>
    )
};

export default Task; 
// task.component.jsx

import { useContext } from 'react'; 

import { FaTimes } from 'react-icons/fa'; 

import { TaskListContext } from '../../contexts/taskList.context';

import { SubHeader3, TaskContainer } from './task.styled.component';


//Task component
const Task = ({ task }) => {
    const {deleteTask, toggleReminder} = useContext(TaskListContext);
    
    return (
        <TaskContainer
            border={task.reminder}
            onDoubleClick={()=> toggleReminder(task.id)}>
                <SubHeader3> 
                    {task.text}{'   '} 
                    <FaTimes 
                        style={{color:'red', cursor:'pointer'}} 
                        onClick={() => deleteTask(task.id)}/> 
                </SubHeader3>
                <p>{task.day}</p>            
        </TaskContainer>
    )
};

export default Task; 
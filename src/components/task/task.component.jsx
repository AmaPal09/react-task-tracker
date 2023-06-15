// task.component.jsx

import { useContext } from 'react'; 

import { FaTimes } from 'react-icons/fa'; 

import { TaskListContext } from '../../contexts/taskList.context';
import './task.component.styles.css'; 


// const Task = ({ task, onDelete, onToggle }) => {
const Task = ({ task }) => {
    const {deleteTask, toggleReminder} = useContext(TaskListContext);
    
    return (
        <div 
            className={`task ${task.reminder ? 'reminder': ''}`} 
            // onDoubleClick={()=> onToggle(task.id)}>
            onDoubleClick={()=> toggleReminder(task.id)}>
                <h3>
                    {task.text}{'   '} 
                    <FaTimes 
                        style={{color:'red', cursor:'pointer'}} 
                        // onClick={() => onDelete(task.id)}/> 
                        onClick={() => deleteTask(task.id)}/> 
                </h3>
                <p>{task.day}</p>            
        </div>
    )
};

export default Task; 
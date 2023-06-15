//add-task-form.component.jsx

import { useState, useContext } from 'react'; 

import { TaskListContext } from '../../contexts/taskList.context'; 

import "./add-task-form.component.styles.css"; 


// const AddTaskForm = ({onSubmitForm}) => {
const AddTaskForm = () => {
    const {addTask} = useContext(TaskListContext); 
    const [text, setText] = useState('');  
    const [day, setDay] = useState('');  
    const [reminder, setReminder] = useState(false);  

    const submitForm = (e) => {
        e.preventDefault(); 

        addTask({text, day, reminder}); 

        setText(''); 
        setDay('');
        setReminder(false); 
    }


    return (
        <form className="add-form" onSubmit={submitForm}>
            <div className="form-control" >
                <label>Task</label>
                <input 
                    type="text" 
                    value={text}
                    placeholder="Add your task" 
                    required
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type="text" 
                    value={day}
                    placeholder="Add day & time" 
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    value={reminder} 
                    checked={reminder}
                    onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </div>
            <input 
                type="submit" 
                value="Save Task" 
                // className="btn btn-block" 
                className="submit-btn"/> 
        </form>
    )
}; 

export default AddTaskForm; 
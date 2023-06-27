//add-task-form.component.jsx

import { useState, useContext } from 'react'; 

import { TaskListContext } from '../../contexts/taskList.context'; 

import { 
    AddForm,  
    FormControl, 
    FormControlLabel, 
    FormControlInput, 
    FormControlCheck, 
    FormControlCheckLabel, 
    FormControlCheckInput, 
    SubmitInput, 
} from './add-task-form.component.styled'


//AddTaskForm component
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
        <AddForm onSubmit={submitForm}> 
            <FormControl > 
                <FormControlLabel> Task </FormControlLabel>
                <FormControlInput 
                    type="text" 
                    value={text}
                    placeholder="Add your task" 
                    required
                    onChange={(e) => setText(e.target.value)} />
            </FormControl>
            <FormControl> 
                <FormControlLabel> Day & Time </FormControlLabel>
                <FormControlInput 
                    type="text" 
                    value={day}
                    placeholder="Add day & time" 
                    onChange={(e) => setDay(e.target.value)} />
            </FormControl>
            <FormControlCheck>
                <FormControlCheckLabel> Set Reminder </FormControlCheckLabel>
                <FormControlCheckInput
                    type="checkbox"
                    value={reminder} 
                    checked={reminder}
                    onChange={(e)=> setReminder(e.currentTarget.checked)} />
            </FormControlCheck>
            <SubmitInput
                type="submit" 
                value="Save Task" 
                className="submit-btn"/> 
        </ AddForm> 
    )

}; 

export default AddTaskForm; 
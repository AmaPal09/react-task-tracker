//add-task-form.component.jsx

import { useState } from 'react'; 

// const defaultTaskForm = {
//     task: '', 
//     day: '',
//     reminder: null, 
// }

const AddTaskForm = ({onSubmitForm}) => {
    
    // const [taskForm, setTaskForm] = useState(defaultTaskForm); 

    // const resetTaskForm = () => {
    //     setTaskForm(defaultTaskForm); 
    // }

    // const onChangeHandler = (e) => {
    //     console.log(e); 
    // }

    const [text, setText] = useState('');  
    const [day, setDay] = useState('');  
    const [reminder, setReminder] = useState(false);  

    const submitForm = (e) => {
        e.preventDefault(); 

        onSubmitForm({text, day, reminder}); 

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
                className="btn btn-block" /> 
        </form>
    )
}; 

export default AddTaskForm; 
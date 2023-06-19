//add-task-form.component.jsx

import { useState, useContext } from 'react'; 

import { TaskListContext } from '../../contexts/taskList.context'; 

import "./add-task-form.component.styles.css"; 
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


    // return (
    //     <form className="add-form" onSubmit={submitForm}>
    //         <div className="form-control" >
    //             <label>Task</label>
    //             <input 
    //                 type="text" 
    //                 value={text}
    //                 placeholder="Add your task" 
    //                 required
    //                 onChange={(e) => setText(e.target.value)} />
    //         </div>
    //         <div className="form-control">
    //             <label>Day & Time</label>
    //             <input 
    //                 type="text" 
    //                 value={day}
    //                 placeholder="Add day & time" 
    //                 onChange={(e) => setDay(e.target.value)} />
    //         </div>
    //         <div className="form-control form-control-check">
    //             <label>Set Reminder</label>
    //             <input 
    //                 type="checkbox"
    //                 value={reminder} 
    //                 checked={reminder}
    //                 onChange={(e)=> setReminder(e.currentTarget.checked)} />
    //         </div>
    //         <input 
    //             type="submit" 
    //             value="Save Task" 
    //             // className="btn btn-block" 
    //             className="submit-btn"/> 
    //     </form>
    // )
    return (
        // <form className="add-form" onSubmit={submitForm}>
        <AddForm onSubmit={submitForm}> 
            {/* <div className="form-control" > */}
            <FormControl > 
                {/* <label>Task</label> */}
                <FormControlLabel> Task </FormControlLabel>
                {/* <input  */}
                <FormControlInput 
                    type="text" 
                    value={text}
                    placeholder="Add your task" 
                    required
                    onChange={(e) => setText(e.target.value)} />
            {/* </div> */}
            </FormControl>
            {/* <div className="form-control"> */}
            <FormControl> 
                {/* <label>Day & Time</label> */}
                <FormControlLabel> Day & Time </FormControlLabel>
                {/* <input  */}
                <FormControlInput 
                    type="text" 
                    value={day}
                    placeholder="Add day & time" 
                    onChange={(e) => setDay(e.target.value)} />
            {/* </div> */}
            </FormControl>
            {/* <div className="form-control form-control-check"> */}
            <FormControlCheck>
                {/* <label>Set Reminder</label> */}
                <FormControlCheckLabel> Set Reminder </FormControlCheckLabel>
                {/* <input  */}
                <FormControlCheckInput
                    type="checkbox"
                    value={reminder} 
                    checked={reminder}
                    onChange={(e)=> setReminder(e.currentTarget.checked)} />
            {/* </div> */}
            </FormControlCheck>
            {/* <input  */}
            <SubmitInput
                type="submit" 
                value="Save Task" 
                // className="btn btn-block" 
                className="submit-btn"/> 
        {/* // </form> */}
        </ AddForm> 
    )

}; 

export default AddTaskForm; 
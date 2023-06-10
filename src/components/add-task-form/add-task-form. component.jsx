//add-task-form.component.jsx

const AddTaskForm = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add your task" />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add day & time" />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" /> 
        </form>
    )
}; 

export default AddTaskForm; 
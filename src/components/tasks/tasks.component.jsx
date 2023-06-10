//tasks.components.jsx

import PropTypes from "prop-types"; 

import Task from "../task/task.component";


const Tasks = ({ taskList }) => {

    return (
        <div className='task'>
            { taskList.map((task) => (
                <Task key={task.id} task={task} />
                )
            ) }
        </div>
    )
}; 

Tasks.defaultProps = {
    taskList: [],  
}

Tasks.propTypes = {
    taskList: PropTypes.array, 
}

export default Tasks
//tasks.components.jsx

import { Fragment } from "react";
import PropTypes from "prop-types"; 

import Task from "../task/task.component";



const Tasks = ({ taskList }) => {

    return (
        <Fragment>
            { taskList.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                />)
            ) }
        </Fragment>
    )
}; 

Tasks.defaultProps = {
    taskList: [],  
}

Tasks.propTypes = {
    taskList: PropTypes.array, 
}

export default Tasks
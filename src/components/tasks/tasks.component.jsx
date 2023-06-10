//tasks.components.jsx

import { Fragment } from "react";
import PropTypes from "prop-types"; 




const Tasks = ({ taskList }) => {

    return (
        <Fragment>
            { taskList.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
                // <p key={task.id}>{task.day}</p>
                )
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
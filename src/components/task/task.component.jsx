// task.component.jsx

import { Fragment } from "react";

const Task = ({ task }) => {
    return (
        <Fragment>
            <h3>{task.text}</h3>
            <p>{task.day}</p>            
        </Fragment>
    )
};

export default Task; 
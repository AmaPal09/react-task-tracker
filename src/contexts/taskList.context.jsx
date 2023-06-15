//taskList.context.jsx

import { createContext, useState, useEffect } from "react";


//Fetch tasks from API 
async function fetchTasks() {
    const res = await fetch('http://localhost:5100/tasks');
    const data = await res.json();
    return data;
}

//Fetch single task from API 
const fetchTask = async (id) =>  {
    const res = await fetch(`http://localhost:5100/tasks/${id}`);
    const data = await res.json();
    return data;
}

//actual value to be accessed 
export const TaskListContext = createContext({
    taskList: [], 
    // setTaskList: () => null, 
    deleteTask: () => {}, 
    toggleReminder: () => {}, 
    addTask: () => {}, 
}); 

export const TaskListProvider = ({children}) => {
    const [taskList, setTaskList] = useState([]); 
    
    useEffect(()=> {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            console.log(tasksFromServer); 
            setTaskList(tasksFromServer)
        } 
        getTasks();         
    }, []);

    //deleteTask -- use context later 
    const deleteTask = async (id) => { 
        // console.log(id, 'delete');
        await fetch(`http://localhost:5100/tasks/${id}`, {
            method: 'DELETE'
        })
        setTaskList(taskList.filter((task) => task.id !== id)); 
    }

    //toggle task reminders 
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id); 
        const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}; 

        const res = await fetch(`http://localhost:5100/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        
        const data = await res.json(); 

        // console.log('toggle', id); 
        setTaskList(taskList.map((task) => task.id === id ? 
            {...task, reminder: data.reminder} : 
            task
        )); 
    }

    //Add tasks 
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5100/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(task)
        })
        const data = await res.json()

        setTaskList([...taskList, data]); 
    } 

    const value = {
        taskList, 
        // setTaskList, 
        deleteTask, 
        toggleReminder, 
        addTask, 
    }
    return <TaskListContext.Provider value={value}>{children}</TaskListContext.Provider>
}


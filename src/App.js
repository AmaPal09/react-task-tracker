//Apps.js 

import { useState } from 'react';

import Header from './components/header/header.component'; 
import Tasks from './components/tasks/tasks.component';
import AddTaskForm from './components/add-task-form/add-task-form. component';


function App() {

    const [taskList, setTaskList] = useState([
        {
            id: 1,
            text: 'Docs App',
            day: 'Jul 9 at 11:00 am', 
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at Post',
            day: 'Jul 12 at 2:30 am', 
            reminder: true,
        },
        {
            id: 3,
            text: 'Grocery shopping',
            day: 'Jul 12 at 8:00pm', 
            reminder: false,
        },
    ]);

    //deleteTask -- use context later 
    const deleteTask = (id) => { 
        // console.log(id, 'delete');
        setTaskList(taskList.filter((task) => task.id !== id)); 
    }

    //toggle task reminders 
    const toggleReminder = (id) => {
        // console.log('toggle', id); 
        setTaskList(taskList.map((task) => task.id === id ? 
            {...task, reminder: !task.reminder} : 
            task
        )); 
    }

    //Add tasks 
    const addTask = (task) => {
        
        const id = Math.floor(Math.random() * 10000) + 1 
        const newTask = {id, ...task}; 
        setTaskList([...taskList, newTask]); 
        console.log(task);  
        console.log(taskList); 
    } 

  return (
    <div className="container">
        <Header title='Task Tracker'/> 
        <AddTaskForm onSubmitForm={addTask}/> 
        {taskList.length > 0 ? 
            (<Tasks 
                taskList={taskList} 
                onDelete={deleteTask} 
                onToggle={toggleReminder} /> 
            ) : 
            ('No tasks to show')
        }
    </div>
  );
}

export default App;

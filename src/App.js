//Apps.js 

import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/header/header.component'; 
import Tasks from './components/tasks/tasks.component';
import AddTaskForm from './components/add-task-form/add-task-form.component';
import Footer from './components/footer/footer.component';
import About from './components/about/about.component';


function App() {
    const [showAddTask, setShowAddTask] = useState(false); 
    
    const [taskList, setTaskList] = useState([]);
    
    useEffect(()=> {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            console.log(tasksFromServer); 
            setTaskList(tasksFromServer)
        } 
        
        getTasks(); 
        
    }, []);

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
        
        // const id = Math.floor(Math.random() * 10000) + 1 
        // const newTask = {id, ...task}; 
        // setTaskList([...taskList, newTask]); 
        // console.log(task);  
        // console.log(taskList); 
    } 

  return (
    <Router>
    <div className="container">
        <Header 
            title='Task Tracker' 
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}/> 
        {showAddTask && <AddTaskForm onSubmitForm={addTask}/> }
        {taskList.length > 0 ? 
            (<Tasks 
                taskList={taskList} 
                onDelete={deleteTask} 
                onToggle={toggleReminder} /> 
            ) : 
            ('No tasks to show')
        }
        <Routes> 
        <Route path="/About" Component={About}/>
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
